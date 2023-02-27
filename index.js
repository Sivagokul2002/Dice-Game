//first random image generation
var a=Math.floor(Math.random()*6+1);
var b=document.querySelectorAll("img")[0];
b.setAttribute("src","images/dice"+a+".png");

//second  random image generation
var d=Math.floor(Math.random()*6+1);
var c=document.querySelectorAll("img")[1];
c.setAttribute("src","images/dice"+d+".png");

//condition to declare winner
if(a>d){
    document.querySelector("h1").innerHTML=" Player 1 Wins!...";
}

else if(d>a){
    document.querySelector("h1").innerHTML=" Player 2 Wins!...";
}

else{
    document.querySelector("h1").innerHTML="..!DRAW!..";
}




