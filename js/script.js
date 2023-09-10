const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

const topSection = document.querySelector(".set1"); 
const bottomSection = document.querySelector(".set2"); 

topSection.style.width = `${screenWidth / 2}px`;
bottomSection.style.width = `${screenWidth / 2}px`; 

console.log(`Screen width: ${screenWidth}px, Screen height: ${screenHeight}px`);
