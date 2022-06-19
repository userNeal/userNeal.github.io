const images = [
    "image0.jpg"
    ,"image1.jpg"
    ,"image2.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgimage = document.createElement("img");
// create image on html from js
bgimage.src= `img/${chosenImage}`;
document.body.appendChild(bgimage);
// put image on the html on the very bottom -> appendChild
// put image on the html on the top -> prepend
