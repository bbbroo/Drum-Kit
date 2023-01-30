let allButtons = document.querySelectorAll(".drum");

for (let index = 0; index < allButtons.length; index++) {
  allButtons[index].addEventListener("click", function () {
    whichPlay(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
}

addEventListener("keydown", function (event) {
  whichPlay(event.key);
  buttonAnimation(event.key);
});

function whichPlay(keyButtonPressed) {
  switch (keyButtonPressed) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("./sounds/kick.mp3");
      kick.play();
      break;

    default:
      break;
  }
}

function buttonAnimation (currentKey) {
    let activeButton = document.querySelector(`.${currentKey}`)
    activeButton.classList.add("pressed");
    setTimeout(function () {
    activeButton.classList.remove("pressed");
    }, 100)
}