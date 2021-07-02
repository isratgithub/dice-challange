var randomNumber1;
var randomNumber2;   
randomNumber1 = Math.floor(Math.random()*6 +1);
var randomImageSource="images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", randomImageSource);

randomNumber2= Math.floor(Math.random()*6)+1;
var randomImageSource2 ="images/dice" +randomNumber2 +".png";
document.querySelector(".img2").setAttribute("src",randomImageSource2);
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!";
    document.querySelector(".flag1").style.display="inline-block";
}else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!";
    document.querySelector(".flag2").style.display="inline-block";
}else{
    document.querySelector("h1").innerHTML="DRAW!";
}


