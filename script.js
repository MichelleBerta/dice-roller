// Dice icons shake when button is clicked
$("#shake").click(function () {
  shake($(".diceIcon"));
});

let images = ["img/dice-six-faces-one.svg", "img/dice-six-faces-two.svg", "img/dice-six-faces-three.svg", "img/dice-six-faces-four.svg", "img/dice-six-faces-five.svg", "img/dice-six-faces-six.svg"];

let dice = document.querySelectorAll("img");

// add sound to dice roll
const audio = new Audio("http://cd.textfiles.com/itcontinues/WIN/YTB22/RATTLE1.WAV");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});

// adaptable SHAKE function, from
// https://bradleyhamilton.com/projects/shake/index.html
function shake(thing) {
  var interval = 100;
  var distance = 10;
  var times = 6;

  for (var i = 0; i < times + 1; i++) {
    $(thing).animate(
      {
        left: i % 2 == 0 ? distance : distance * -1,
      },
      interval
    );
  }
  $(thing).animate(
    {
      left: 0,
      top: 0,
    },
    interval
  );
}
// end SHAKE

// dice roll
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
    document.querySelector("#total").innerHTML = "Your roll is " + (dieOneValue + 1 + (dieTwoValue + 1));

    // conditional statement to set character image //
    const dieRoll = dieOneValue + 1 + (dieTwoValue + 1);

    var createImage = function (fileName, description) {
      var oldElement = document.getElementById("characterReveal");
      if (oldElement) {
        oldElement.parentNode.removeChild(oldElement);
      }
      let x = document.createElement("img");
      x.setAttribute("id", "characterReveal");
      x.setAttribute("src", fileName);
      x.setAttribute("class", "newCharacter");
      x.setAttribute("alt", description);
      document.body.appendChild(x);
    };
    let character;
    if (dieRoll === 2) {
      createImage("img/characters/golden-puppy.jpg", "Golden Retriever Puppy");
    } else if (dieRoll === 3) {
      createImage("img/characters/bullmastiff-puppy.jpg", "Bull Mastiff Puppy");
    } else if (dieRoll === 4) {
      createImage("img/characters/beagle-puppy.jpg", "Beagle Puppy");
    } else if (dieRoll === 5) {
      createImage("img/characters/Bulldog-puppy.jpg", "Bulldog Puppy");
    } else if (dieRoll === 6) {
      createImage("img/characters/collie-puppy.jpg", "Collie Puppy");
    } else if (dieRoll === 7) {
      createImage("img/characters/pug-puppy.jpg", "Pug Puppy");
    } else if (dieRoll === 8) {
      createImage("img/characters/german-shepherd-puppy.jpg", "White German Shepherd Puppy");
    } else if (dieRoll === 9) {
      createImage("img/characters/corgi-puppy.jpg", "Corgi Puppy");
    } else if (dieRoll === 10) {
      createImage("img/characters/husky-puppy.jpg", "Husky Puppy");
    } else if (dieRoll === 11) {
      createImage("img/characters/saint-bernard-puppy.jpg", "Saint Bernard Puppy");
    } else if (dieRoll === 12) {
      createImage("img/characters/boston-puppy.jpg", "Boston Terrier Puppy");
    }
  }, 1000);
}
roll();
