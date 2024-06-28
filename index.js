//random no generation - right part

var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1+1);
console.log(randomNumber1);

//for left image element

var randomImageSource = "images/dice" + randomNumber1 + ".png"; //images/dice1 - images/dice6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);




//for right part

var randomNumber2 = Math.floor(Math.random()*6) + 1;

//right image

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

//changing the heading line

if(randomNumber1 > randomNumber2){
    document.querySelector("h2").innerHTML = " 🚩 Player 1 Winss!!!"
}

else if(randomNumber2 > randomNumber1){
    document.querySelector("h2").innerHTML = " 🚩 Player 2 Winss!!!"
}

else{
    document.querySelector("h2").innerHTML = " Draw 🤝"
}