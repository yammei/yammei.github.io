var cats = [];                      // Array of all cat objects
var alternatingTick = 0;            // "Every other tick" actions
let activeSelection = 0;            // User's actively selected cat
const catModels = ['', ' Void'];    // Array of file name changes for cat models

// Creates new cat object and displays newly created cat on the field
function createCat() {
    var catName = document.getElementById("cat-name").value;

    if (catName == '') {
        newMessage('/imgs/Cat Icon.png', `Please enter kitten name!`);
        return;
    }

    // Set max size of cat pen
    if (cats.length < 4) {

        // Create new cat
        var newCat = new Cat(catName, 0);
        newCat.color = getRandomNumber(0,200);
        newCat.model = catModels[getRandomNumber(0, (catModels.length-1))];
        cats.push(newCat);

        // Display new cat
        displayCat(newCat);
        showCatStats(newCat);

        // Button Animation
        var createBtn = document.getElementById("cib1");
        createBtn.style.scale = ".9";
        createBtn.style.transform = "rotate(0deg)";
        createBtn.style.transition = 'scale .1s ease-in-out, transform .1s ease-in-out';
        setTimeout(function () {
            createBtn.style.scale = "1";
            createBtn.style.transform = "rotate(0deg)";
            createBtn.style.filter = "brightness(.8)"
            createBtn.style.transition = 'scale .1s ease-in-out, transform .1s ease-in-out';
        }, 100);
        setTimeout(function () {
            createBtn.style.filter = "brightness(1)"
        }, 150);

        // Show cat creation message
        newMessage('/imgs/Cat Icon.png', `${catName} has joined the yard!`);
    } else {
        newMessage('/imgs/Cat Icon.png', `The yard is full of friends!`);
    }
}

// Game physics
function tick(cat) {

    // Buff cat stats
    if (cat.energy > 0 && cat.energy < 100) {
        cat.energy ++;
    }

    // Debuff cat stats
    if (cat.happiness > 0 && getRandomNumber(0,10) > 2 && alternatingTick == 1) {
        cat.happiness -= 1;
    }
    if (cat.health > 0 && getRandomNumber(0,10) > 2 && alternatingTick == 1) {
        cat.health  -= 1;
    }


    //Update cat age
    cat.ageMonths++;
    if (cat.ageMonths == 12)  {
        cat.ageYears++;
        cat.ageMonths = 0;
    }

    // Update cat status
    showCatStats(cats[activeSelection]);

    // RNG cat movement
    if (getRandomNumber(0,10) > 4 && alternatingTick == 1) {
        const targetXPosition = getRandomNumber(0, 600);
        const targetYPosition = getRandomNumber(450, 700);
        walk(cat, targetXPosition, targetYPosition);
    }

}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Adjusts Z-Index of Cats based on Y-Position
function walkLayer () {
    if (cats.length < 2) {
        return;
    }
    var tempCats = cats.slice();
    for (let i=0; i < cats.length; i++)  {
        var catImage = document.getElementById(`cat-image-${cats[i].name}`);
        cats[i].liveYPos = catImage.offsetTop;
    }
    tempCats.sort((catA, catB) => catA.liveYPos - catB.liveYPos);
    for (let i=tempCats.length-1; i >= 0; i--) {
        var catImage = document.getElementById(`cat-image-${tempCats[i].name}`);
        catImage.style.zIndex = i+1;
    }
}

// Button Animation
function bulge (divID) {
    const btn = document.getElementById(`${divID}`);
    btn.style.scale = "1.1";
    btn.style.transform = "rotate(-3deg)";
    btn.style.transition = 'scale .1s ease-in-out, transform .1s ease-in-out';
    btn.style.filter = "brightness(1.05)"
}

// Button Animation
function debulge (divID) {
    const btn = document.getElementById(`${divID}`);
    btn.style.scale = "1.0";
    btn.style.transform = "rotate(0deg)";
    btn.style.transition = 'scale .1s ease-in-out, transform .1s ease-in-out';
    btn.style.filter = "brightness(1)";
}

// RNG idle walking animation for cats displayed
async function walk(cat, targetXPosition, targetYPosition) {
    const catElement = document.getElementById(`cat-image-${cat.name}`);
    const shadowElement = document.getElementById(`cat-shadow-${cat.name}`);
    const nameElement = document.getElementById(`cat-name-${cat.name}`);

    // Cat
    catElement.src = `/imgs/Briski Walk${cat.model}.gif`;
    if (targetXPosition > cat.xPosition) {
        catElement.style.transform = 'scaleX(-1)';
    }
    catElement.style.transition = 'top 2s ease-in, left 2s ease-in';
    catElement.style.top = `${targetYPosition}px`;
    catElement.style.left = `${targetXPosition}px`;
    setTimeout(function () {
        catElement.src = `/imgs/Briski${cat.model}.png`;
        catElement.style.transform = 'scaleX(1)';
    }, 1990);

    // Shadow
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

    // Name
    nameElement.style.top = `${cat.yPosition}px`;
    nameElement.style.left = `${cat.xPosition}px`;
    nameElement.style.transition = 'top 2s ease-in, left 2s ease-in';
    nameElement.style.top = `${targetYPosition}px`;
    nameElement.style.left = `${targetXPosition}px`;
    nameElement.style.zIndex = `9999`;

    // Update (x, y) position
    cat.xPosition = targetXPosition;
    cat.yPosition = targetYPosition;
}

// Feed actively selected cat
function feedCat() {
    cats[activeSelection].feed();
}

// Play with actively selected cat
function playCat() {
    cats[activeSelection].play();
}

// Set newly created cat on the field
function displayCat(cat) {
    var gameWindow = document.getElementById("cat-container");

    // Display Cat
    var catImage = document.createElement(`img`);
    catImage.id = `cat-image-${cat.name}`;
    catImage.className = "cat-image";
    catImage.src = `/imgs/Briski${cat.model}.png`;
    catImage.style.position = "absolute";
    catImage.style.top = "600px";
    catImage.style.left = "300px";
    catImage.style.scale = ".4";
    catImage.style.zIndex = "1";
    catImage.style.filter = `hue-rotate(${cat.color}deg)`;
    gameWindow.appendChild(catImage);

    // Display Shadow
    var catShadow = document.createElement(`img`);
    catShadow.id = `cat-shadow-${cat.name}`;
    catShadow.src = "/imgs/Briski Shadow.png";
    catShadow.style.position = "absolute";
    catShadow.style.top = "600px";
    catShadow.style.left = "300px";
    catShadow.style.scale = ".4";
    catShadow.style.zIndex = "0";
    gameWindow.appendChild(catShadow);

    // Display Name
    var catName = document.createElement(`p`);
    catName.id = `cat-name-${cat.name}`;
    catName.style.position = "absolute";
    catName.textContent = `${cat.name}`;
    catName.style.color = "#fff";
    // catName.style.webkitTextStroke = "1px #000";
    catName.style.fontSize = "15pt";
    catName.style.fontWeight = "bold";
    catName.style.fontFamily = "Varela Round', sans-serif";
    catName.style.top = `${cat.yPosition}px`;
    catName.style.left = `${cat.xPosition}px`;
    catName.style.marginTop = "150px";
    catName.style.marginLeft = "250px";
    catName.style.zIndex = "0";
    gameWindow.appendChild(catName);

    // Display Buffs
    var catBuffs = document.createElement(`p`);
    catBuffs.id = `cat-buffs-${cat.name}`;
    catBuffs.style.position = "absolute";
    gameWindow.appendChild(catBuffs);

    document.getElementById(`cat-image-${cat.name}`).addEventListener('mouseover', function() {
        this.style.filter = `brightness(110%) hue-rotate(${cat.color}deg)`;
        });
    document.getElementById(`cat-image-${cat.name}`).addEventListener('mouseout', function() {
        this.style.filter = `brightness(100%) hue-rotate(${cat.color}deg)`;
        });
    document.getElementById(`cat-image-${cat.name}`).addEventListener('click', function() {
        console.log(`Image ${cat.name} selected!`);
        activeSelection = cat.id;
        });
}

// UX QOL: event listeners for creating a new cat
document.addEventListener('DOMContentLoaded', function () {
    const catNameInput = document.getElementById("cat-name");
    const cib1Button = document.getElementById("cib1");

    catNameInput.addEventListener('input', function () {
        updateButtonHighlight(catNameInput, cib1Button);
    });
    cib1Button.addEventListener('click', function () {
        clearInput(catNameInput);
    });
});

// Track cat (x, y) position
async function observeTopLeftChanges(catName) {
    const catElement = document.getElementById(`cat-image-${catName}`);
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
          const newTopValue = catElement.style.top;
          const newLeftValue = catElement.style.left;
          console.log(`Top value: ${newTopValue}`);
          console.log(`Left value: ${newLeftValue}`);
        }
      }
    });
    const config = { attributes: true };
    observer.observe(catElement, config);
}

// Highlights "Create Cat" button if input box has text
function updateButtonHighlight(inputElement, buttonElement) {
    if (inputElement.value.trim() !== '') {

        buttonElement.style.transition = 'filter .5s ease-in-out, transform .5s ease-in-out';
        buttonElement.style.filter = 'brightness(1.1)';
        buttonElement.style.transform = 'scale(1.1)';

        setTimeout(function () {
            buttonElement.style.transition = 'filter .5s ease-in-out, transform .5s ease-in-out';
            buttonElement.style.filter = 'brightness(1)';
            buttonElement.style.transform = 'scale(1)';
        }, 500);

    } else {
        buttonElement.style.filter = 'brightness(1)';
        buttonElement.style.transform = 'scale(1)';
    }
}

// Clear textbox and restore button style to default
function clearInput(inputElement) {
    inputElement.value = '';
    console.log("Text Box Cleared.");
}

// Create new pop-up message in a notification style
function newMessage(imageSrc, textMessage) {
    console.log(`Message Created: ${textMessage}`);

    var gameWindow = document.getElementById("cat-notifications");

    const messageDiv = document.createElement('div');
    messageDiv.style.position = "relative";
    messageDiv.style.display = "flex";
    messageDiv.style.flexDirection = "row";
    messageDiv.style.height = "100px";
    messageDiv.style.width = "400px";
    messageDiv.style.marginBottom = "10px";
    messageDiv.style.backgroundColor = "#F8EAA1";
    messageDiv.style.borderRadius = "25px";
    messageDiv.style.border = '5px solid #DED49E';
    messageDiv.style.zIndex = "9999";

    const imageElement = document.createElement('img');
    imageElement.src = imageSrc;
    imageElement.style.height = "50px";
    imageElement.style.width = "50px";
    imageElement.style.margin = "auto 25px";

    const messageElement = document.createElement('p');
    messageElement.textContent = textMessage;
    messageElement.style.fontSize = "20pt";
    messageElement.style.fontWeight = "bold";
    messageElement.style.color = "#7D7C73"
    messageElement.style.height = "fit-content";
    messageElement.style.width = "250px";
    messageElement.style.marginTop = "auto";
    messageElement.style.marginBottom = "auto";

    messageDiv.appendChild(imageElement);
    messageDiv.appendChild(messageElement);
    gameWindow.appendChild(messageDiv);

    messageDiv.style.opacity = '0';
    messageDiv.style.transform = 'scale(0.75)';
    messageDiv.style.transition = 'opacity .15s ease-in, transform .15s ease-in';
    setTimeout(function () {
        messageDiv.style.opacity = '1';
        messageDiv.style.transform = 'scale(1.1)';
    }, 0);
    setTimeout(function () {
        messageDiv.style.transition = 'transform .1s ease-in';
        messageDiv.style.transform = 'scale(1)';
    }, 150);

    setTimeout(function () {
        messageDiv.style.opacity = '1';
        messageDiv.style.transition = 'opacity .75s ease-in-out, margin-top .75s ease-in-out';
        messageDiv.style.opacity = '0';
        messageDiv.style.marginTop = "-50px";
        setTimeout(function () {
            gameWindow.removeChild(messageDiv);
        }, 750);
    }, 1000);
}

// Show actively selected cat's status
function showCatStats (cat) {
    var cat = cats[activeSelection];
    var catInfo = document.getElementById("cat-info-updates");
    var catStatus = `
        <p id="cat-info-title"><strong>${cat.name}</p>
        <p class="cat-info-all">Age: ${cat.ageYears} year(s) and ${cat.ageMonths} month(s)</p>
        <p class="cat-info-all">Health: ${cat.health}</p>
        <p class="cat-info-all">Happiness: ${cat.happiness}</p>
        <p class="cat-info-all">Energy: ${cat.energy}</p>
    `;
    catInfo.innerHTML = catStatus;
}

// Game clock quanta
setInterval(function () {
    for (let i = 0; i < cats.length; i++) {
        // console.log(`Tick ${alternatingTick}: ${cats[i].name}`);
        tick(cats[i]);
    }
    // Change tick status
    if (alternatingTick == 0) {
        alternatingTick = 1;
    } else {
        alternatingTick = 0;
    }
}, 3000);

// Cat object with various stat adjustments
class Cat {
    constructor(name) {
        // Cat Properties
        this.id = cats.length;
        this.name = name;
        this.color = 0;
        this.model;

        // Cat Status
        this.ageMonths = 0;
        this.ageYears = 0;
        this.health = 100;
        this.happiness = 50;
        this.energy = 100;

        // Meta Data - Position
        this.xPosition = 300;
        this.yPosition = 600;
        this.liveYPos;
    }

    feed() {
        // Fed button animation (clicked)
        var fedBtn = document.getElementById("cib2");
        fedBtn.style.scale = ".9";
        fedBtn.style.transform = "rotate(0deg)";
        fedBtn.style.transition = 'scale .1s ease-in-out, transform .1s ease-in-out';
        setTimeout(function () {
            fedBtn.style.scale = "1";
            fedBtn.style.transform = "rotate(0deg)";
            fedBtn.style.filter = "brightness(.8)"
            fedBtn.style.transition = 'scale .1s ease-in-out, transform .1s ease-in-out';
        }, 100);
        setTimeout(function () {
            fedBtn.style.filter = "brightness(1)"
        }, 150);

        // Feed cat
        console.log(`${this.name} is eating.`);
        this.health += 10;
        this.happiness += 5;
        this.energy += 5;

        // Cap for health and happiness
        if (this.health >= 100) {
            this.health = 100;
        }
        if (this.happiness >= 100) {
            this.happiness = 100;
        }

        // Display message that the cat ate
        newMessage('/imgs/Cat Icon.png', `${this.name} ate!`);
    }

    play() {
        // Play button animation (clicked)
        var playBtn = document.getElementById("cib3");
        playBtn.style.scale = ".9";
        playBtn.style.transform = "rotate(0deg)";
        playBtn.style.transition = 'scale .05s ease-in-out, transform .05 ease-in-out';
        setTimeout(function () {
            playBtn.style.scale = "1";
            playBtn.style.transform = "rotate(0deg)";
            playBtn.style.filter = "brightness(.8)"
            playBtn.style.transition = 'scale .1s ease-in-out, transform .1s ease-in-out';
        }, 100);
        setTimeout(function () {
            playBtn.style.filter = "brightness(1)"
        }, 150);

        // Play with cat
        console.log(`${this.name} is playing.`);
        this.health += 10;
        this.happiness += 20;
        this.energy -= 20;

        // Cap for health and happiness
        if (this.health >= 100) {
            this.health = 100;
        }
        if (this.happiness >= 100) {
            this.happiness = 100;
        }

        // Display message that the cat has played
        newMessage('/imgs/Cat Icon.png', `${this.name} is playing!`);
    }
}

