const gameBoard = document.getElementById('gameBoard');
let turn = "O";
let boardArray = new Array(9).fill("E");
let totalTurns = 0;
let winner = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
]

const blueImage = document.getElementById('blueImage');
const redImage = document.getElementById('redImage');

const result = document.getElementById('result');
const restart = document.getElementById('restart');


const winningLine = document.getElementById('winningLine');

function game(event){
    const index = event.target.id;
    console.log(event.clientX, event.clientY);
    
    if (boardArray[index] == "E"){
        totalTurns ++;
        if (turn == "O") {

            event.target.style.color = "blue";
            event.target.value = "O";
            boardArray[index] = "O";
            winner.forEach (([first, sec, third]) => {
                if (boardArray[first] != "E" && (boardArray[first] == boardArray[sec]) && (boardArray[sec] == boardArray[third]))
                {   
                    result.style.borderColor = "black"
                    result.innerHTML = `!! Winner is Player ${turn} !!`
                    blueImage.src = "Images/blueWins.png";
                    redImage.src = "Images/redLose.png";
                    blueImage.style.animationPlayState = "running";
                     gameBoard.removeEventListener('click', game);
                     return;
                }
                
            })
            turn = "X";
        }
        else if (turn == "X") {

            event.target.style.color = "red";
            event.target.value ="X";
            boardArray[index] = "X";
            winner.forEach (([first, sec, third]) => {
                if ((boardArray[first] != "E" && boardArray[first] == boardArray[sec]) && (boardArray[sec] == boardArray[third]))
                {    
                    result.style.borderColor = "black"
                    result.innerHTML = `!! Winner is Player ${turn} !!`
                    redImage.src = "Images/redWins.png";
                    blueImage.src = "Images/blueLose.png"
                    redImage.style.animationPlayState = "running";
                    gameBoard.removeEventListener('click', game);
                    return;
                }
            })
            turn = "O";
        }

        
    }
    console.log(totalTurns);
    if (totalTurns >= 9){
        result.innerHTML = "!! Match is Draw !!"
        redImage.src = "Images/redLose.png";
        blueImage.src = "Images/blueLose.png"
        result.style.borderColor = "black"
        totalTurns = 0;
        boardArray.fill("E");
    }
    
}

gameBoard.addEventListener('click', game)
restart.addEventListener('click', () => {
    blueImage.src = "Images/bluePlayer.png";
    blueImage.style.animationPlayState = "paused";
    redImage.src = "Images/redPlayer.png";
    redImage.style.animationPlayState = "paused";
    result.innerHTML = ""
    result.style.borderColor = "#b086eb"
    totalTurns = 0;
    turn = "O"
    const inputs = document.querySelectorAll('input');
    Array.from(inputs).forEach((input) => {
        input.value = "";   
    })
    boardArray = new Array(9).fill("E");
    gameBoard.addEventListener('click', game);
})






















// winningLine.style.top = 439
                    // winningLine.style.left = 482
                    // winningLine.style.width = "200px"

                    //console.log("hello")
                    //console.log("hello2", event.clientX, index, index)