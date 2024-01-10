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
// let test= getComputerChoice();
// alert(test);