// The loader function
document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector(".main").style.display = "none";
    document.querySelector(".loader").style.display = "block";
  } else {
    document.querySelector(".loader").style.display = "none";
    document.querySelector(".main").style.display = "block";
  }
 
};

//PascalCase followed
var lastbutton = null; //Last button that was clicked.
var score = 0; //Score, i.e. how many Cards are opened
var turns = 0; //Number of turns taken.
let isEnableClickTile = true;

const Cards = []; //Array to store the Cards.
//Setting the Cards.
for (let j = 0; j < 8; j++) {
  var randoNum = Math.floor(Math.random() * 16) + 1; // Random number from 1 to 16.
  Cards.push(randoNum); //Push twice.
  Cards.push(randoNum);
}
Cards.sort(() => 0.5 - Math.random()); //Random shuffling of Cards.
Cards.push(Cards[0]); //Ignore the Card at 0th positon.

for (let f = 1; f <= 16; f++) {
  // document.getElementById("button" + f).style = style;
  document.getElementById("button" + f).hover = "{color: green;}";
  // document.getElementById("button" + f).hover="background-color: white; color: black; border: 2px solid #4CAF50;"
  //Button formatting
}
