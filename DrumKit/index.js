// Make sound by clicking on buttons

var length = document.querySelectorAll("button").length;
for(var i = 0; i < length; i++ ){
document.querySelectorAll("button")[i].addEventListener("click", clickButton);
function clickButton() {
    var buttonHTML = this.innerHTML;
    sound(buttonHTML);
    animation(buttonHTML);
    }
}

// Make sound by using keyboard

document.addEventListener("keypress", pressKey);
function pressKey(event) {
    sound(event.key);
    animation(event.key);
}

// Function to add sound to the webpage

function sound(key) {
    switch (key) {
        case "w":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "a":
            var kickBass = new Audio("sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "s":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        default:
            console.log("Wrong key was pressed");
            break;
    }
}

// Animation

function animation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 150);
}
