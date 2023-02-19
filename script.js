'use strict';


// document.querySelector('.message').textContent='ok bye'


// document.querySelector(".guess").value=12
// document.querySelector(".between").textContent='komol'
let Secretnumber=Math.trunc(Math.random()*20)+1
let score=20
let highscore=0
// document.querySelector('.number').textContent=Secretnumber
console.log(Secretnumber)
// let score=20


document.querySelector('.check').addEventListener('click',function(){
  const guess=Number(document.querySelector('.guess').value)
  // console.log(guess, typeof guess)

  // when there is no input
  if(!guess){
    document.querySelector('.message').textContent='No numbers'
  }
  // when players win
  else if(guess===Secretnumber){
    document.querySelector('.message').textContent='Correct Number'

    document.querySelector('body').style.backgroundColor='green';
    document.querySelector('.number').style.width='30rem'
    document.querySelector('.number').textContent=Secretnumber

    if(score>highscore){
      highscore=score;
      document.querySelector('.highscore').textContent=highscore
    }

  }
  else if(guess!==Secretnumber){
    if(score>1){
      document.querySelector('.message').textContent=guess>Secretnumber?'Too high':'Too low';
      score--;
      document.querySelector(".score").textContent=score;}
      else{
        document.querySelector('.message').textContent='You lost the game';
        document.querySelector(".score").textContent=0;}
  
      }
    
  // // when guess is to high
  // else if(guess!==Secretnumber){
  //   if(score>1){
  //   document.querySelector('.message').textContent='Too high';
  //   score--;
  //   document.querySelector(".score").textContent=score;}
  //   else{
  //     document.querySelector('.message').textContent='You lost the game';
  //     document.querySelector(".score").textContent=0;}

  //   }


  //   // when guess is too low
  


  //   else if(guess<Secretnumber){
  //     if(score>1){
  //       document.querySelector('.message').textContent='Too low';
  //       score--;
  //       document.querySelector(".score").textContent=score;}
  //       else{
  //         document.querySelector('.message').textContent='You lost the game';
  //         document.querySelector(".score").textContent=0;}
  //   }
  })

  document.querySelector('.again').addEventListener('click',function(){
    score=20;
    Secretnumber=Math.trunc(Math.random()*20)+1
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector(".score").textContent=score;
    document.querySelector(".number").textContent='?';
    console.log(Secretnumber)
    document.querySelector(".guess").value=' '
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('.number').style.width='15rem'

  })
