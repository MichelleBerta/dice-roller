

let images = [
    "img/dice-six-faces-one.svg",
    "img/dice-six-faces-two.svg",
    "img/dice-six-faces-three.svg",
    "img/dice-six-faces-four.svg",
    "img/dice-six-faces-five.svg",
    "img/dice-six-faces-six.svg"
];

let dice = document.querySelectorAll("img");

// console.log(dice);


// Dice icons shake when button is clicked
$('#shake').click(function() {
  shake($('.diceIcon'));
});


// adaptable SHAKE function, from 
// https://bradleyhamilton.com/projects/shake/index.html 
function shake(thing) {
  var interval = 100;
  var distance = 10;
  var times = 6;

  for (var i = 0; i < (times + 1); i++) {
    $(thing).animate({
      left:
        (i % 2 == 0 ? distance : distance * -1)
    }, interval);
  }
  $(thing).animate({
    left: 0,
    top: 0
  }, interval);
}
// end SHAKE


function roll() {
    dice.forEach(function (die) {
      die.classList.add("#die-1");
      die.classList.add("#die-2");
    });
    setTimeout(function () {
      let dieOneValue = Math.floor(Math.random() * 6);
      let dieTwoValue = Math.floor(Math.random() * 6);
      console.log(dieOneValue, dieTwoValue);
      document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
      document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
      document.querySelector("#total").innerHTML =
        "Your roll is " + (dieOneValue + 1 + (dieTwoValue + 1));
    }, 1000);
}
roll();

// modal
$(document).ready(function(){
  $('.modal').modal();
});

