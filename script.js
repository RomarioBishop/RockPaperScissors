
alert(game());


function game(){
    let win=0;
    let lost=0;
    let draw=0;

    for(let i=1;i <=5;i++){
        let playerSelection = prompt(" Enter Either \'Rock\', \'Paper\' OR \'Scissors\' ");
        let computerSelection = getComputerChoice();
        console.log(computerSelection);
        let result= playRound(playerSelection,computerSelection);

        if (result === "win")
            win++;
        else if (result === "lost")
            lost++;
        else
            draw++;
    }

    if(win > lost){
        return `You have WON! with ${win} wins and ${lost} loses and you drew ${draw} times`;
    }else if(lost > win){
        return `You have LOST! with ${win} wins and ${lost} loses and you drew ${draw} times`;
    }else{
        return `There no Winner,you ended with ${win} wins and ${lost} loses and you drew ${draw} times`;
    }
}

function playRound(playerSelection,computerSelection){
    let result;
    if (/^rock$/i.test(playerSelection) || /^paper$/i.test(playerSelection) 
        || /^scissors$/i.test(playerSelection)){

        playerSelection=capitalize(playerSelection);

        if(playerSelection !== computerSelection){

            if(playerSelection === "Rock" && computerSelection ==="Scissors")
                result = "win";

            else if(playerSelection === "Rock" && computerSelection ==="Paper")
                result = "lost";

            else if(playerSelection === "Scissors" && computerSelection ==="Paper")
                result = "win";

            else if(playerSelection === "Scissors" && computerSelection ==="Rock")
                result = "lost";

            else if(playerSelection === "Paper" && computerSelection ==="Rock")
                result = "win";

            else if(playerSelection === "Paper" && computerSelection ==="Scissors")
                result = "lost";
        }

        else{
            alert( `It is a Draw, you both chose ${playerSelection}`);
            return "draw";
        }

        if(result === "win"){
            alert( `You WIN!, ${playerSelection} beats ${computerSelection}`);
            return "win";
        }
        else if(result ==="lost"){
            alert(`You LOST!, ${computerSelection} beats ${playerSelection}`); 
            return "lost";
        }
    }
    else{
        console.log(`Please enter either \'Rock\', \'Paper\' OR \'Scissors\'`)
        return "error";
    }

}

function getComputerChoice(){
    let randomNum = Math.floor((Math.random()*3) + 1);
    // console.log(randomNum, typeof randomNum);

    switch (randomNum){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
        default:
            return "An error occurred";            
    }
    
}

function capitalize(string){
    if (!(string === ""||string === null || /\d/.test(string) )){
        let firstPart = string.slice(0,1);
        let secondPart = string.slice(1);
        return (firstPart.toUpperCase() + secondPart.toLowerCase()); 
    }else{
        return `Please enter a valid word/words, you entered ${string}`;
    }

}
// let test= getComputerChoice();
// alert(test);