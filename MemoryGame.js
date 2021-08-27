var lastbutton=null; //Latst button th
var score=0;
var turns=0;
const arr=[];

for(let j=0;j<8;j++){
    r=Math.floor(Math.random() * (90 - 64 + 1) ) + 64;

    arr.push(String.fromCharCode(r));
    arr.push(String.fromCharCode(r));
}
arr.sort( () => .5 - Math.random() );
//const arr=["0","a","b","b","a","c","c","a","b","a","c","c","a","b","a","c","c"]
arr.push(arr[0]);
    function Buttonclicked(a){
     document.getElementById("button"+a).innerHTML=arr[a];
      document.getElementById("button"+a).disabled = "disabled";
     checkscore(a);
    }
  
    function checkscore(a){
        if(lastbutton==null){
            lastbutton=a;
        }
        else {
            if(arr[a]!=arr[lastbutton]){
                temp=lastbutton;
                document.getElementById("button"+a).style="background-color:Orange;"
                document.getElementById("button"+temp).style="background-color:Orange;"
        window.setTimeout(function (){
            document.getElementById("button"+a).innerHTML="?";
             document.getElementById("button"+a).style="background-color:;"
                document.getElementById("button"+temp).style="background-color:;"
           document.getElementById("button"+temp).innerHTML="?";
            document.getElementById("button"+temp).disabled = "";
        document.getElementById("button"+a).disabled = "";
        },1000);
       
        lastbutton=null;
        
        }
        else{
            score=score+1;
            document.getElementById("button"+a).style="background-color:lime;"
                document.getElementById("button"+lastbutton).style="background-color:lime;"
            document.getElementById("button"+lastbutton).disabled = "disabled";
            document.getElementById("button"+a).disabled = "disabled";
            document.getElementById("score").innerHTML="Score="+score;
            lastbutton=null
        }
      
        turns=turns+1;
            document.getElementById("Turns").innerHTML="Turns taken="+turns;
              if(score==(arr.length-1)/2){
            gameover();
        }
        }
    }
    function gameover(){
        alert("Game Over");
        document.getElementById("score").innerHTML="Game over!";
        document.getElementById("Turns").innerHTML="You took "+turns+" turns";
    }
