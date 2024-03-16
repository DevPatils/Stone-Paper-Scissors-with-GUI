let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice") 
const msg =document.querySelector("#msg");

const userScorepara=document.querySelector('#user-score')
const compScorepara=document.querySelector('#comp-score')

const genCompChoice =()=>{
    let options=['rock','paper','scissor']
    let Indx=Math.floor(Math.random()*3);
    let compChoice = options[Indx]
    // console.log(compChoice);
    return compChoice;
}

const drawGame=()=>{
    console.log("Game was draw.")
    msg.innerText='Game was draw' 
    msg.style.backgroundColor='#081b31'  

}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("You Win!")
        msg.innerText = `You Win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor='Green'

    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        console.log("You Loos!")
        msg.innerText = `You loos! computer's ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor='red'
    }
}

const playGame = (userChoice) =>{
    let compChoice = genCompChoice();
    console.log("User choice =", userChoice);
    console.log("Computer choice =", compChoice);

    if(userChoice==compChoice){
        drawGame();
    }else{
        let userWin = true;
        if(userChoice==='rock'){
            userWin=compChoice==='paper'?false:true
        }
        else if(userChoice==='paper'){
            userWin=compChoice==='scissor'?false:true
        }
        else{
            userWin=compChoice==='rock'?false:true
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute('id');
        // console.log("choice was clicked", userChoice)
        playGame(userChoice)
    })
})