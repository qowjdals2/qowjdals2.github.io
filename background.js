const image = ["#ef5777", "#575fcf", "#4bcffa", "#34e7e4", "#0be881", "#f53b57", "#3c40c6",  "#0fbcf9"]
const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${chosenImage}')`;
