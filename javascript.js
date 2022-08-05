function getComputerChoice(){
    const arrOfChoices = ['rock', 'paper', 'scissors'];
    let randomNum = Math.floor(Math.random() * 3);
    const compChoice = arrOfChoices[randomNum]
    return compChoice
}

console.log(getComputerChoice)

