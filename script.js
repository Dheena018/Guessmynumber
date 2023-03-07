 'use strict'

const inputEl =document.getElementById('container');
const centerEl =document.getElementById('submit');  
const outputEl =document.getElementById('paragraph');
const guess = document.getElementById('guessess')
const highscore = document.getElementById('guesses')
const restart =document.getElementById('restart');

const randomNum = () =>{
    return Math.trunc(Math.random()*50+1);
}
console.log(randomNum);


// global variables:
var guessValue=5;
var highScoreValue=0;

guess.innerText=guessValue;
highscore.innerText=highScoreValue;

var ranNum = randomNum();
console.log(ranNum);

centerEl.addEventListener("click",function(){
    var guessNum = Number(inputEl.value);
    console.log(guessNum);
    
    if(guessNum){
        if(guessValue < 1){
            outputEl.textContent = "Game over"
            restart.style.display = 'block';
        }else{
            if(ranNum === guessNum){
                outputEl.textContent ="Correct Guessing 😆"
                highscore.innerText=highScoreValue;
    
            }else if(ranNum > guessNum){
                outputEl.textContent ="Guess is 2 Low 😉!"
                guessValue--;
                guess.innerText=guessValue;
    
            }else if(ranNum < guessNum){
                outputEl.textContent = "Guess is 2 High 🤦‍♂️!"
                guessValue--;
                guess.innerText=guessValue;
        }
       


        }
    }else{
        alert('Number Please')
    }

})

