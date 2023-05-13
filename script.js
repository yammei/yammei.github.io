// script.js file

function initTyped() {
  var typed = new Typed('#typed', {
    strings: ['Hello world, I\'m Mei Zhang!'],
    typeSpeed: 50,
    onComplete: function() {
      $('#subheading').css('opacity', 1);
      stretchWarp();
      alternateImages();
      $('#my-image').on('load', function() {
        // Set the opacity of the image container and image to 1 once the image has loaded
        $('.image-container2').css('opacity', 1);
        $('#my-image').css('opacity', 1);
      });
    }
  });
}


function stretchWarp() {
  const image = document.querySelector('.image-container2 img');
  const container = document.querySelector('.image-container2');

  document.addEventListener('mousemove', function(event) {
    const x = event.clientX - container.offsetLeft - container.offsetWidth / 2;
    const y = event.clientY - container.offsetTop - container.offsetHeight / 2;
    
    // Set the rotation of the image based on the mouse position
    image.style.transform = `rotateY(${x / 130}deg) rotateX(${-y / 25}deg)`;
  });
}

function alternateImages() {
  var image1 = "img/aidev.png";
  var image2 = "img/2nd.png";
  var image3 = "img/3rd.png";
  var images = [image1, image2, image3];
  var currentImage = 0;
  var image = document.querySelector("#my-image");

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
  const maxBlur = 6;
  const minBlur = 2;
  const maxBrightness = 0.75;
  const minBrightness = 0.55;
  let blur = maxBlur * Math.abs(percentX);
  if (blur < minBlur) {
    blur = minBlur;
  }
  const brightness = maxBrightness - Math.abs(percentY) * (maxBrightness - minBrightness);
  parallaxBg.style.filter = `blur(${blur}px) brightness(${brightness})`;
}


$(document).ready(function() {
  parallax();
  initTyped();
  adjustBackgroundFilter();
});

