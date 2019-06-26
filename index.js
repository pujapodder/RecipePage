let images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg"
];
let i = 0;

function slides() {
  document.getElementById("slider").src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
}

setInterval(slides, 2000);
function RecipeButtonFunction_ChickenTikka() {
  alert("Recipe of Chicken Tikka");
  document.getElementById("recipe").style.display = "flex";
  document.getElementById("IngredientList").style.textAlign = "left";
}

function RecipeButtonFunction() {
  alert("Recipe of");
  document.getElementById("recipe").style.display = "visible";
}

window.onload = function() {
  document.getElementById("recipe").style.display = "none";
};

function slideshow() {
  var Bar = document.getElementById("checkBar");
  if (Bar.display === "none") {
    Bar.display = "block";
  } else {
    Bar.display = "none";
  }
}
