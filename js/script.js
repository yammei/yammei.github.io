var cats = [];

function createCat() {
    var catName = document.getElementById("cat-name").value;
    if (cats.length < 2) {
        var newCat = new Cat(catName, 0);
        cats.push(newCat);
        console.log("Here");
        displayCat(newCat);
        showCatStats();
    } else {
        console.log("Cannot have more than 2 cats.");
    }
  }

function tick(cat) {
    cat.age += 1;
    if (getRandomNumber(0,10) > 4) {
        const targetXPosition = getRandomNumber(0, 600);
        const targetYPosition = getRandomNumber(400, 700);
        walk(cat, targetXPosition, targetYPosition);
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
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

    cat.xPosition = targetXPosition;
    cat.yPosition = targetYPosition;
}

function displayCat(cat) {
    var gameWindow = document.getElementById("cat-container");

    var catImage = document.createElement(`img`);
    catImage.id = `cat-image-${cat.name}`;
    catImage.src = "/imgs/Briski.png";
    catImage.style.position = "absolute";
    catImage.style.top = "600px";
    catImage.style.left = "300px";
    catImage.style.scale = ".4";
    catImage.style.zIndex = "1";
    catImage.style.filter = `hue-rotate(${getRandomNumber(-25,10)}deg)`;
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

}

function showCatStats () {
    var catInfo = document.getElementById("cat-info");

    var catStatus = `
        <strong>${cat.name}</strong><br>
        Age: ${cat.age}<br>
        Health: ${cat.health}<br>
        Happiness: ${cat.happiness}
    `;
    catInfo.innerHTML = catStatus;
}

setInterval(function () {
    for (let i = 0; i < cats.length; i++) {
        tick(cats[i]);
    }
}, 2000);

class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.health = 100;
      this.happiness = 50;
      this.xPosition = 300;
      this.yPosition = 600;
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