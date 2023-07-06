// script.js file

function initTyped() {
  var typed = new Typed('#typed', {
    strings: ['Hello World, I\'m '],
    typeSpeed: 50,
    showCursor: false, 
    onComplete: function() 
      {
        initTyped2();
      }
  });
}

function initTyped2() {
  var typed = new Typed('#typed2', {
    strings: ['Mei Zhang!'],
    typeSpeed: 50,
    showCursor: false, 
  });
  console.log("Intro Text Typed.");
}

function stretchWarpMirror() {
  const image = document.querySelector('.image-container-mirror img');
  const container = document.querySelector('.image-container-mirror');

  document.addEventListener('mousemove', function(event) {
    const x = event.clientX - container.offsetLeft - container.offsetWidth / 2;
    // const y = event.clientY - container.offsetTop - container.offsetHeight / 2;
    
    // Set the rotation of the image based on the mouse position
    image.style.transform = `rotateY(${x / -20}deg) rotateX(-30deg)`;
  });
}

function stretchWarp() {
  const image = document.querySelector('.image-container img');
  const container = document.querySelector('.image-container');

  document.addEventListener('mousemove', function(event) {
    const x = event.clientX - container.offsetLeft - container.offsetWidth / 2;
    // const y = event.clientY - container.offsetTop - container.offsetHeight / 2;
    
    // Set the rotation of the image based on the mouse position
    image.style.transform = `rotateY(${x / 20}deg) rotateX(-30deg)`;
  });
}

function alternateImages() {
  var image1 = "../img/scarabscanner.png";
  var image2 = "../img/maybot.png";
  var image3 = "../img/swe.png";
  var images = [image1, image2, image3];
  var currentImage = 0;
  var image = document.querySelector("#macscreen");

  setInterval(function() {
    image.src = images[currentImage];
    currentImage = (currentImage + 1) % images.length;
  }, 2000);
}

function parallax() {
  const container = document.querySelector('.parallax-container');
  const image = document.querySelector('.parallax-bg');

  document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const offsetX = -1 + (mouseX / container.offsetWidth) * 2;
    const offsetY = -1 + (mouseY / container.offsetHeight) * 2;
    const transformValue = `translate(${offsetX * -14}px, ${offsetY * -8}px)`;

    image.style.transform = transformValue;
  });
}

function adjustBackgroundFilter(event) {
  document.addEventListener('mousemove', adjustBackgroundFilter);
  const parallaxBg = document.querySelector(".parallax-bg");
  const mouseX = event.clientX;
  const mouseY = event.clientY;
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const percentX = (mouseX - centerX) / centerX;
  const percentY = (mouseY - centerY) / centerY;
  const maxBlur = 14;
  const minBlur = 10;
  const maxBrightness = 0.45;
  const minBrightness = 0.45;
  let blur = maxBlur * Math.abs(percentX);
  if (blur < minBlur) {
    blur = minBlur;
  }
  const brightness = maxBrightness - Math.abs(percentY) * (maxBrightness - minBrightness);
  parallaxBg.style.filter = `blur(${blur}px) brightness(${brightness})`;
}

$(document).ready(function() {

  parallax();
  console.log("Parallax Functioning.");

  initTyped();
  console.log("Text Animation Functioning.");

  alternateImages();
  console.log("Image Alternation Functioning.");

  stretchWarp();
  console.log("Stretch Warp Functioning.");

  stretchWarpMirror();
  console.log("Mirrored Stretch Warp Functioning.");

  adjustBackgroundFilter();
  console.log("Background Filter Automation Functioning.");

});

