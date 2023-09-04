window.addEventListener('scroll', function() {
  const element1 = document.querySelector('#craigslist-section1-img1');
  const element2 = document.querySelector('#craigslist-section1-img1-container');
  const element3 = document.querySelector('#craigslist-section2-img1');
  const element4 = document.querySelector('#craigslist-section2-img1-container');

  if (window.scrollY >= 0 && window.scrollY < 500) {

    const opacity = (250 - window.scrollY) / 250;
    element1.style.opacity = opacity.toString();

    const rotateXValue = scrollY * -0.2; 
    const rotateYValue = scrollY * -0.2; 
    element1.style.transform = `perspective(1000px) rotateX(${rotateXValue}deg) rotateY(${rotateYValue}deg)`;  
    console.log(`rotateX(${rotateXValue}deg), rotateY(${rotateYValue}deg)`);

    const marginLeft = -(window.scrollY / 100) * 100;

    element1.style.marginLeft = `${marginLeft}px`;

  }

  if (window.scrollY > 500 && window.scrollY < 1000) {

    const opacity = (250 - window.scrollY) / 250;
    element1.style.opacity = opacity.toString();

    const rotateXValue = scrollY * -0.2; 
    const rotateYValue = scrollY * -0.2; 
    element1.style.transform = `perspective(1000px) rotateX(${rotateXValue}deg) rotateY(${rotateYValue}deg)`;  
    console.log(`rotateX(${rotateXValue}deg), rotateY(${rotateYValue}deg)`);

    const marginLeft = -(window.scrollY / 100) * 100;

    element1.style.marginLeft = `${marginLeft}px`;

  }

});
