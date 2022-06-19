const images = [
    "image0.jpg"
    ,"image1.jpg"
    ,"image2.jpg"
    ,"image3.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
const image = document.querySelector("#image");
const bgimage = document.createElement("img");
// create image on html from js
bgimage.src= `img/${chosenImage}`;
image.appendChild(bgimage);
// put image on the html on the very bottom -> appendChild
// put image on the html on the top -> prepend

const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];

const button = document.querySelector("button");
console.log(colors.length);
const firstRandom = Math.floor(Math.random() * colors.length);
colors.splice(colors[firstRandom], 1);
console.log(colors.length);
const secondRandom = Math.floor(Math.random() * colors.length);
document.body.style.background = `linear-gradient(${colors[firstRandom]}, ${colors[secondRandom]})`;
