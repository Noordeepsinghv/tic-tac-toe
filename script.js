const sqes = document.getElementsByClassName("sqes");
const players = document.getElementsByClassName("players");
const turnIndicator = document.getElementById("turnIndicator");
let playerTurn = 1;
const activeXs = [];
const activeOs = [];


function getSqeNumberFromId(id) {
    const match = id.match(/\d$/);
    return match ? Number(match[0]) : null;
}

function getActiveSquares() {
    
    Array.from(sqes).forEach((sqe) => {
        const sqeNumber = getSqeNumberFromId(sqe.id);
        if (sqe.classList.contains("hasCircle") === true) {
            activeOs.push(sqeNumber);
        } else if (sqe.classList.contains("hasCross") === true) {
            activeXs.push(sqeNumber);
        }
    });
    return { activeXs, activeOs };
}

function matchPattern(arr) {
    if (arr.length < 3) {
        return [-1, -1, -1];
    }
    
    const set = new Set(arr);
    const winPatterns = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ];
    for (let i = 0; i < winPatterns.length; i++) {
        const [a, b, c] = winPatterns[i];
        if (set.has(a) && set.has(b) && set.has(c)) {
            return [a, b, c];
        }
    }
    return [-1, -1, -1];
}

function checkWin(arrX, arrO) {
    const [a, b, c] = matchPattern(arrX);
    const [d, e, f] = matchPattern(arrO);
    if (a !== -1) {
        return ['sq'+a, 'sq'+b, 'sq'+c, "x"];
    } else if (d !== -1) {
        return ['sq'+d, 'sq'+e, 'sq'+f, "o"];
    } else {
        return [-1, -1, -1, -1];
    }
}

function markWinningSquares(idA, idB, idC) {
    const sqA = document.getElementById(idA);
    const sqB = document.getElementById(idB);
    const sqC = document.getElementById(idC);
    if (sqA) sqA.classList.add("winnerFlash");
    if (sqB) sqB.classList.add("winnerFlash");
    if (sqC) sqC.classList.add("winnerFlash");
}

async function handleSquareClick(sqEvent) {
    // console.log("Clicked:", sqEvent.currentTarget.id);
    const sq = document.getElementById(sqEvent.currentTarget.id);

    if (playerTurn === 1 && sq.classList.contains("hasCircle") === false && sq.classList.contains("hasCross") === false) {
        playerTurn = 2;
        sq.classList.add("hasCross");
        turnIndicator.style.left = "50%";

    } else if (playerTurn === 2 && sq.classList.contains("hasCross") === false && sq.classList.contains("hasCircle") === false) {
        playerTurn = 1;
        sq.classList.add("hasCircle");
        turnIndicator.style.left = "0%";
    }

    const { activeXs, activeOs } = getActiveSquares();

    const [a, b, c, symbol] = checkWin(activeXs, activeOs);
    console.log(a, b, c, symbol);

    if (symbol === -1) {
        return;
    }

    markWinningSquares(a, b, c);
}

Array.from(sqes).forEach((sqe) => {
    sqe.addEventListener("click", handleSquareClick);
});


function handlePlayerSwitch(playerClickEvent){
    // console.log("Clicked:", playerClickEvent.currentTarget.id);
    const playerSpan = document.getElementsByClassName("playerSpan");
    if (activeOs.length === 0  && activeXs.length === 0) {    
        if (playerClickEvent.currentTarget.id === "player1") {
            turnIndicator.style.left = "0%";
            playerSpan[0].contentEditable = "true";
            playerTurn = 1;
        } else if (playerClickEvent.currentTarget.id === "player2") {
            turnIndicator.style.left = "50%";
            playerSpan[1].contentEditable = "true";
            playerTurn = 2;
        }

    } else {
        playerSpan[0].contentEditable = "false";
        playerSpan[1].contentEditable = "false";
    }
}

Array.from(players).forEach((player) => {
    player.addEventListener("click", handlePlayerSwitch);
});
