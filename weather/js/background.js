const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const background = document.body;

const bgImage = new Image();
bgImage.src = `img/${chosenImage}`;
background.style.backgroundImage = `url(${bgImage.src})`;
