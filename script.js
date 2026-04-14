const sqes = document.getElementsByClassName("sqes");
const players = document.getElementsByClassName("players");
const turnIndicator = document.getElementById("turnIndicator");
let playerTurn = 1;

Array.from(sqes).forEach((sqe) => {
	sqe.addEventListener("click", (sqEvent) => {
		console.log("Clicked:", sqEvent.currentTarget.id);
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

	});
});

// Array.from(players).forEach((player) => {
//     player.addEventListener("click", (playerClickEvent) => {
//         console.log("Clicked:", playerClickEvent.currentTarget.id);
//         if (playerClickEvent.currentTarget.id === "player1") {
//             turnIndicator.style.left = "0%";
//             playerTurn = 1;
//         } else if (playerClickEvent.currentTarget.id === "player2") {
//             turnIndicator.style.left = "50%";
//             playerTurn = 2;
//         }
//     });
// });