var player1 = (Math.floor(Math.random() * 6) +1);
var player2 = (Math.floor(Math.random() * 6) +1);

function diceWinner() {
    if(player1 > player2){
        document.querySelector("button").innerHTML = "<img class='winner-flag' src='Images/flag.jpg' alt='flag'> Player 1 wins!!!";
    }
    else if(player1 < player2) {
        document.querySelector("button").innerHTML = "Player 2 wins!!! <img class='winner-flag' src='Images/flag.jpg' alt='flag'>";
    }
    else {
        document.querySelector("button").textContent = "It's a Draw"
    }
}

function shuffleDice1() {
    // if(player1 === 1) {
    //     document.querySelector("img.player1").setAttribute("src", "Images/dice1.jpg");
    //     document.querySelector("img.player1").setAttribute("alt", "dice1");
    // }
    // else  if(player1 === 2) {
    //     document.querySelector("img.player1").setAttribute("src", "Images/dice2.jpg");
    //     document.querySelector("img.player1").setAttribute("alt", "dice2");
    // }
    // else  if(player1 === 3) {
    //     document.querySelector("img.player1").setAttribute("src", "Images/dice3.jpg");
    //     document.querySelector("img.player1").setAttribute("alt", "dice3");
    // } 
    // else  if(player1 === 4) {
    //     document.querySelector("img.player1").setAttribute("src", "Images/dice4.jpg");
    //     document.querySelector("img.player1").setAttribute("alt", "dice4");
    // }
    // else  if(player1 === 5) {
    //     document.querySelector("img.player1").setAttribute("src", "Images/dice5.jpg");
    //     document.querySelector("img.player1").setAttribute("alt", "dice5");
    // }
    // else {
    //     document.querySelector("img.player1").setAttribute("src", "Images/dice6.jpg");
    //     document.querySelector("img.player1").setAttribute("alt", "dice6");
    // }
    var firstDice = "Images/dice" + player1 + ".jpg";
    var altName1 = "Dice" + player1;
    document.querySelector(".img1").setAttribute("src", firstDice);
    document.querySelector(".img1").setAttribute("alt", altName1);
}

function shuffleDice2() {
    // if(player2 === 1) {
    //     document.querySelector("img.player2").setAttribute("src", "Images/dice1.jpg");
    //     document.querySelector("img.player2").setAttribute("alt", "dice1");
    // }
    // else  if(player2 === 2) {
    //     document.querySelector("img.player2").setAttribute("src", "Images/dice2.jpg");
    //     document.querySelector("img.player2").setAttribute("alt", "dice2");
    // }
    // else  if(player2 === 3) {
    //     document.querySelector("img.player2").setAttribute("src", "Images/dice3.jpg");
    //     document.querySelector("img.player2").setAttribute("alt", "dice3");
    // } 
    // else  if(player2 === 4) {
    //     document.querySelector("img.player2").setAttribute("src", "Images/dice4.jpg");
    //     document.querySelector("img.player2").setAttribute("alt", "dice4");
    // }
    // else  if(player2 === 5) {
    //     document.querySelector("img.player2").setAttribute("src", "Images/dice5.jpg");
    //     document.querySelector("img.player2").setAttribute("alt", "dice5");
    // }
    // else {
    //     document.querySelector("img.player2").setAttribute("src", "Images/dice6.jpg");
    //     document.querySelector("img.player2").setAttribute("alt", "dice6");
    // }
    var secondDice = "Images/dice" + player2 + ".jpg";
    var altName2 = "Dice" + player2;
    document.querySelector(".img2").setAttribute("src", secondDice);
    document.querySelector(".img2").setAttribute("alt", altName2);
}


document.querySelector("button").onclick = function finalWinner() {
    diceWinner();
    shuffleDice1();
    shuffleDice2();
} 
    
