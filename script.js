// game logic

let boxes = document.getElementsByClassName("box");
let message = document.getElementById("message");
let resetButton = document.getElementById("reset-btn");

let xTurn = true;

let player;

const ifPlayerIsWinning = (player, boxes) => {
    if(boxes[0].innerHTML === player && boxes[1].innerHTML === player && boxes[2].innerHTML === player)
        return true;
    else if(boxes[3].innerHTML === player && boxes[4].innerHTML === player && boxes[5].innerHTML === player)
        return true;
    else if(boxes[6].innerHTML === player && boxes[7].innerHTML === player && boxes[8].innerHTML === player)
        return true;
    else if(boxes[0].innerHTML === player && boxes[3].innerHTML === player && boxes[6].innerHTML === player)
        return true;
    else if(boxes[1].innerHTML === player && boxes[4].innerHTML === player && boxes[7].innerHTML === player)
        return true;
    else if(boxes[2].innerHTML === player && boxes[5].innerHTML === player && boxes[8].innerHTML === player)
        return true;
    else if(boxes[0].innerHTML === player && boxes[4].innerHTML === player && boxes[8].innerHTML === player)
        return true;        
    else if(boxes[2].innerHTML === player && boxes[4].innerHTML === player && boxes[6].innerHTML === player)
        return true;
    else 
        return false;
}

let noOfMoves = 0;
let xWinning = false;
let oWinning = false;

for (let box of boxes) {
    box.addEventListener("click", () => {
        if (!xWinning && !oWinning) {
            if(xTurn){
                box.innerHTML = "X";
                box.style.color = "#4EBE85";
                xTurn = false;
                message.innerHTML = "Player O's Turn";
                message.style.color = "#F34337";
                xWinning = ifPlayerIsWinning("X", boxes);
            } else {
                box.innerHTML = "O";
                box.style.color = "#F34337";
                xTurn = true;
                message.innerHTML = "Player X's Turn";
                message.style.color = "#4EBE85";
                oWinning = ifPlayerIsWinning("O", boxes);
            }
            box.disabled = true;
            noOfMoves++;
            if(xWinning){
                message.innerHTML = "Player X Wins!";
                message.style.color = "#4EBE85";
            } else if (oWinning){
                message.innerHTML = "Player O Wins!";
                message.style.color = "#F34337";
            } else if(noOfMoves === 9){
                message.innerHTML = "It's a draw!";
                message.style.color = "#8E8F98";
            }
        }
    })
}  

resetButton.addEventListener("click", () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
        
    }
    message.innerHTML = "Player X to start";
    noOfMoves = 0;
    xWinning = false;
    oWinning = false;
    xTurn = true;
    message.innerHTML = "Player X to start";
    message.style.color = "#4EBE85";
})

//implenting light mode

let body = document.body;
let modeButton = document.getElementById("mode-btn");

modeButton.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    resetButton.style.color = "white";
    modeButton.childNodes[0].style.color = "white";
    modeButton.childNodes[0].classList.toggle("fa-moon");
    modeButton.childNodes[0].classList.toggle("fa-sun");
    if(modeButton.childNodes[0].classList.contains("fa-sun"))
        modeButton.childNodes[0].style.fontSize = "1.5rem";
})

