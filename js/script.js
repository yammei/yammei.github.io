var cats = [];
var alternatingTick = 0;
let activeSelection = 0;

function createCat() {
    var catName = document.getElementById("cat-name").value;
    if (cats.length < 2) {
        var newCat = new Cat(catName, 0);
        var catColor = getRandomNumber(0,200);
        newCat.color = catColor;
        console.log(newCat.color);
        cats.push(newCat);
        displayCat(newCat);
        showCatStats(newCat);
    } else {
        console.log("Cannot have more than 2 cats.");
    }
  }

function tick(cat) {

    // Update cat status
    cat.happiness -= 1;
    cat.health  -= .5;
    cat.ageMonths++;
    if (cat.ageMonths == 12)  {
        cat.ageYears++;
        cat.ageMonths = 0;
    }
    showCatStats(cat);

    // RNG cat movement
    if (getRandomNumber(0,10) > 4 && alternatingTick == 1) {
        const targetXPosition = getRandomNumber(0, 600);
        const targetYPosition = getRandomNumber(400, 700);
        walk(cat, targetXPosition, targetYPosition);
    }

}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function walkLayer () {
    if (cats.length < 2) {
        return;
    }
    tempCats = cats;
    for (let i=0; i < cats.length; i++)  {
        var catImage = document.getElementById(`cat-image-${cats[i].name}`);
        cats[i].liveYPos = catImage.offsetTop;
    }
    tempCats.sort((catA, catB) => catA.liveYPos - catB.liveYPos);
    // console.log(`Sorted Y-Pos: ${tempCats[0].name} ${tempCats[1].name}`);
    for (let i=tempCats.length-1; i >= 0; i--) {
        var catImage = document.getElementById(`cat-image-${tempCats[i].name}`);
        catImage.style.zIndex = i+1;
    }
}

async function walk(cat, targetXPosition, targetYPosition) {
    const catElement = document.getElementById(`cat-image-${cat.name}`);
    const shadowElement = document.getElementById(`cat-shadow-${cat.name}`);
    const nameElement = document.getElementById(`cat-name-${cat.name}`);

    shadowElement.style.top = `${cat.yPosition}px`;
    shadowElement.style.left = `${cat.xPosition}px`;
    shadowElement.style.transition = 'top 2s ease-in, left 2s ease-in';
    shadowElement.style.top = `${targetYPosition}px`;
    shadowElement.style.left = `${targetXPosition}px`;
    const walkInterval = setInterval(async function() {
        walkLayer();
    }, 100);
    setTimeout(async function () {
        clearInterval(walkInterval);
    }, 2000);

    catElement.src = `/imgs/Briski Walk.gif`;
    catElement.style.transition = 'top 2s ease-in, left 2s ease-in';
    catElement.style.top = `${targetYPosition}px`;
    catElement.style.left = `${targetXPosition}px`;
    setTimeout(function () {
        catElement.src = "/imgs/Briski.png";
    }, 1990);

    nameElement.style.top = `${cat.yPosition}px`;
    nameElement.style.left = `${cat.xPosition}px`;
    nameElement.style.transition = 'top 2s ease-in, left 2s ease-in';
    nameElement.style.top = `${targetYPosition}px`;
    nameElement.style.left = `${targetXPosition}px`;
    nameElement.style.zIndex = `9999`;

    cat.xPosition = targetXPosition;
    cat.yPosition = targetYPosition;
}

function feedCat() {
    cats[activeSelection].feed();
}

function playCat() {
    cats[activeSelection].play();
}

function displayCat(cat) {
    var gameWindow = document.getElementById("cat-container");

    console.log(`hue-rotate(${cat.color}}deg)`);
    var catImage = document.createElement(`img`);
    catImage.id = `cat-image-${cat.name}`;
    catImage.className = "cat-image";
    catImage.src = "/imgs/Briski.png";
    catImage.style.position = "absolute";
    catImage.style.top = "600px";
    catImage.style.left = "300px";
    catImage.style.scale = ".4";
    catImage.style.zIndex = "1";
    catImage.style.filter = `hue-rotate(${cat.color}deg)`;
    gameWindow.appendChild(catImage);

    var catShadow = document.createElement(`img`);
    catShadow.id = `cat-shadow-${cat.name}`;
    catShadow.src = "/imgs/Briski Shadow.png";
    catShadow.style.position = "absolute";
    catShadow.style.top = "600px";
    catShadow.style.left = "300px";
    catShadow.style.scale = ".4";
    catShadow.style.zIndex = "0";
    gameWindow.appendChild(catShadow);

    var catName = document.createElement(`p`);
    catName.id = `cat-name-${cat.name}`;
    catName.style.position = "absolute";
    catName.style.top = `${cat.yPosition}px`;
    catName.style.left = `${cat.xPosition}px`;
    catName.style.marginTop = "150px";
    catName.style.marginLeft = "250px";
    catName.textContent = `${cat.name}`;
    catName.style.fontSize = "15pt";
    catName.style.fontWeight = "bold";
    catName.style.zIndex = "0";
    gameWindow.appendChild(catName);


    document.getElementById(`cat-image-${cat.name}`).addEventListener('mouseover', function() {
        this.style.filter = `brightness(110%) hue-rotate(${cat.color}deg)`;
        });
    document.getElementById(`cat-image-${cat.name}`).addEventListener('mouseout', function() {
        this.style.filter = `brightness(100%) hue-rotate(${cat.color}deg)`;
        });
    document.getElementById(`cat-image-${cat.name}`).addEventListener('click', function() {
        console.log(`Image ${cat.name} clicked!`);
        activeSelection = cat.id;
        });

}

function showCatStats (cat) {
    var cat = cats[activeSelection];
    var catInfo = document.getElementById("cat-info");
    var catStatus = `
        <strong>${cat.name}</strong><br>
        Age: ${cat.ageYears} year(s) and ${cat.ageMonths} month(s)<br>
        Health: ${cat.health}<br>
        Happiness: ${cat.happiness}
    `;
    catInfo.innerHTML = catStatus;
}

setInterval(function () {
    for (let i = 0; i < cats.length; i++) {
        console.log(`Tick ${alternatingTick}: ${cats[i].name}`);
        tick(cats[i]);
    }
    // Change tick status
    if (alternatingTick == 0) {
        alternatingTick = 1;
    } else {
        alternatingTick = 0;
    }
}, 1000);

class Cat {
    constructor(name) {
        this.id = cats.length;
        this.name = name;
        this.color = 0;
        this.ageMonths = 0;
        this.ageYears = 0;
        this.health = 100;
        this.happiness = 50;
        this.xPosition = 300;
        this.yPosition = 600;
        this.liveYPos;
    }

    feed() {
        console.log(`${this.name} is eating. Nom nom nom.`);
        this.health += 10;
        this.happiness += 5;
    }

    play() {
        console.log(`${this.name} is playing. Whee!`);
        this.health -= 5;
        this.happiness += 10;
    }

    checkStatus() {
        console.log(`${this.name}'s Status:`);
        console.log(`Age: ${this.age}`);
        console.log(`Health: ${this.health}`);
        console.log(`Happiness: ${this.happiness}`);
    }
}