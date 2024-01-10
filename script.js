

let playerSection = prompt(" Enter Either \'Rock\', \'Paper\' OR \'Scissors\' ");
let computerSelection = getComputerChoice();
console.log(computerSelection);
alert(playRound(playerSection,computerSelection));



function playRound(playerSection,computerSelection){
    let result;
    if (/^rock$/i.test(playerSection) || /^paper$/i.test(playerSection) 
        || /^scissors$/i.test(playerSection)){

        playerSection =capitalize(playerSection);

        if(playerSection !== computerSelection){

            if(playerSection === "Rock" && computerSelection ==="Scissors")
                result = "win";

            else if(playerSection === "Rock" && computerSelection ==="Paper")
                result = "lost";

            else if(playerSection === "Scissors" && computerSelection ==="Paper")
                result = "win";

            else if(playerSection === "Scissors" && computerSelection ==="Rock")
                result = "lost";

            else if(playerSection === "Paper" && computerSelection ==="Rock")
                result = "win";

            else if(playerSection === "Paper" && computerSelection ==="Rock")
                result = "lost";
        }

        else{
            return `It is a Draw, you both chose ${playerSection}`;
        }

        if(result === "win"){
            return `You WIN!, ${playerSection} beats ${computerSelection}`;
        }
        else{
            return `You LOST!, ${computerSelection} beats ${playerSection}`; 
        }
    }
    else{
        return `Please enter either \'Rock\', \'Paper\' OR \'Scissors\'`;
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
        return `Please enter a alid valid word/words, you entered ${string}`;
    }

}
// let test= getComputerChoice();
// alert(test);