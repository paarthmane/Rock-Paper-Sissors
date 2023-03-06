let computerScore =0
let userScore =0
let tied = 0
let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissors = document.querySelector("#scissors")
let Uscore = document.querySelector('#Uscore')
let Cscore = document.querySelector('#Cscore')
let tiematch = document.querySelector("#tie")
let whochose = document.querySelector(".whochose >p")


function getComputerChoice(){
  let choices = ["rock", "paper" , "scissors"]
  let randomNumber = Math.floor(Math.random()*3)
return choices[randomNumber]
}


function win(userChoice,computerChoice){
  userScore++
  Uscore.innerHTML= userScore
  Cscore.innerHTML = computerScore
  whochose.innerHTML = userChoice + " X " +computerChoice  
}

function lose(userChoice,computerChoice){
  computerScore++
  Uscore.innerHTML= userScore
  Cscore.innerHTML = computerScore
  whochose.innerHTML = userChoice + " X " +computerChoice  
}

function tie(userChoice,computerChoice){
  tied++
  tiematch.innerHTML = tied
  whochose.innerHTML = userChoice + " X " +computerChoice 
}

function game(userInput){
  let computerChoice = getComputerChoice()
  console.log(userInput)
  console.log(computerChoice)
 switch(userInput+computerChoice){
  case ("rock scissors"):
  case ("scissors paper"):
  case ("paper rock"):
    win(userInput,computerChoice)
    break

    case ("scissors rock"):
  case ("rock paper"):
  case ("paper scissors"):
    lose(userInput,computerChoice)
    break

    case ("rock rock"):
  case ("scissors scissors"):
  case ("paper paper"):
    tie(userInput,computerChoice)
    break
 }

}
game()



rock.addEventListener("click", () =>{
  game("rock ")
})

paper.addEventListener("click", () =>{
  game("paper ")
})

scissors.addEventListener("click", () =>{
  game("scissors ")
})


