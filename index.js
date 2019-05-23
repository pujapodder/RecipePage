let images=["images/1.jpg",
            "images/2.jpg",
            "images/3.jpg",
            "images/4.jpg",
            "images/5.jpg"];
let i =0;

function slides(){
document.getElementById("slider").src=images[i];
if(i<(images.length-1))
{
    i++;
}
else{
    i=0;
}
}

setInterval(slides,2000);