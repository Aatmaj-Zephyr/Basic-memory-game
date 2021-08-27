var lastbutton=null; //Last button that was clicked. 
var score=0; //Score, i.e. how many cards are opened
var turns=0; //Number of turns taken.

const Cards=[];//Array to store the Cards
//Setting the cards
for(let j=0;j<8;j++){
    r=Math.floor(Math.random()*(90-64+1))+64; //Character set from unicode
    Cards.push(String.fromCharCode(r)); //Push twice.
    Cards.push(String.fromCharCode(r));
}
Cards.sort( () => .5 - Math.random() ); //Random shuffling of cards.
Cards.push(Cards[0]);//Ignore the card at 0th positon

function Buttonclicked(a){ 
//Function to be executed once button is clicked. 
//a is the parameter which tells which button is clicked.
    document.getElementById("button"+a).innerHTML=Cards[a]; //Flip the card over
    document.getElementById("button"+a).disabled = "disabled"; //Disable clicking the same card
    checkscore(a); //Check the cards.
    }
  
function checkscore(a){
    if(lastbutton==null){
        lastbutton=a;
        //If it is the first Card (from two cards) to be chosen,
        //then set the value of lastbutton to the button pressed.
    }
    else {
        if(Cards[a]!=Cards[lastbutton]){ //IF they don't match.....
            temp=lastbutton;
            document.getElementById("button"+a).style="background-color:Orange";
            document.getElementById("button"+temp).style="background-color:Orange";
            //If invalid, then set the background background-color Orange.
            window.setTimeout(function (){
                document.getElementById("button"+a).innerHTML="?";
                document.getElementById("button"+a).style="background-color:";
                document.getElementById("button"+temp).style="background-color:";
                document.getElementById("button"+temp).innerHTML="?";
                document.getElementById("button"+temp).disabled = "";
                document.getElementById("button"+a).disabled = "";
        },1000);
        //With delay, flip them back. and enable clicking.
        
        lastbutton=null; //reset lastbutton
        }
        else{
            //If they match.... 
            score=score+1; //Increase score
            document.getElementById("button"+a).style="background-color:lime";
            document.getElementById("button"+lastbutton).style="background-color:lime";
            //Change their colours to green
            document.getElementById("button"+lastbutton).disabled = "disabled";
            document.getElementById("button"+a).disabled = "disabled";
            //Disable them from further clicking.
            document.getElementById("score").innerHTML="Score="+score;
            //display score
            lastbutton=null;
        }
      
        turns=turns+1; //Increase number of turns
        document.getElementById("Turns").innerHTML="Turns taken="+turns;
        //display the number of turns taken.
        if(score==(Cards.length-1)/2){
            gameover(); //game over.
        }
    }
}
function gameover(){
        window.setTimeout(function (){
         alert("Game Over");
        //alert that the game is over after a delay
        },1000)
        document.getElementById("score").innerHTML="Game over!";
        document.getElementById("Turns").innerHTML="You took "+turns+" turns";
}
