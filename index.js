// Generating a random number between 1 to 6
var randomNumber1 = Math.floor(Math.random() * 6)+1;

// Creating random dice images
// Dice1.png - dice6.png
var randomDiceImage = "dice" + randomNumber1 + ".png";

// images/dice1.png - images/dice6.png
var randomImageSouce = "images/" + randomDiceImage;

// Changing image 1 to random images
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomImageSouce);




// For image 2
var randomNumber2 = Math.floor(Math.random() * 6)+1;
var randomeDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomeDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomImageSource2);


// If player 1 wins
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!";
}

// If player 2 wins
if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩";
}
