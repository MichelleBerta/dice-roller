// Dice icons shake when button is clicked
$("#shake").click(function () {
  shake($(".diceIcon"));
});

let images = ["img/dice-six-faces-one.svg", "img/dice-six-faces-two.svg", "img/dice-six-faces-three.svg", "img/dice-six-faces-four.svg", "img/dice-six-faces-five.svg", "img/dice-six-faces-six.svg"];

let dice = document.querySelectorAll("img");

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
    let character;
    if (dieRoll === 2) {
      character = function createImage() {
        var x = document.createElement("img");
        x.setAttribute("src", "img/characters/pug-puppy.jpg");
        x.setAttribute("class", "newCharacter");
        x.setAttribute("alt", "Pug Puppy");
        document.body.appendChild(x);
      };
    } else if (dieRoll === 3) {
      character = function createImage() {
        var x = document.createElement("img");
        x.setAttribute("src", "img/characters/basset-hound-puppy.jpg");
        x.setAttribute("class", "newCharacter");
        x.setAttribute("alt", "Basset Hound Puppy");
        document.body.appendChild(x);
      };
    } else if (dieRoll === 4) {
      character = function createImage() {
        var x = document.createElement("img");
        x.setAttribute("src", "img/characters/beagle-puppy.jpg");
        x.setAttribute("class", "newCharacter");
        x.setAttribute("alt", "Beagle Puppy");
        document.body.appendChild(x);
      };
    } else if (dieRoll === 5) {
      character = function createImage() {
        var x = document.createElement("img");
        x.setAttribute("src", "img/characters/Bulldog-puppy.jpg");
        x.setAttribute("class", "newCharacter");
        x.setAttribute("alt", "Bulldog Puppy");
        document.body.appendChild(x);
      };
    } else if (dieRoll === 6) {
      character = function createImage() {
        var x = document.createElement("img");
        x.setAttribute("src", "img/characters/collie-puppy.jpg");
        x.setAttribute("class", "newCharacter");
        x.setAttribute("alt", "Collie Puppy");
        document.body.appendChild(x);
      };
    } else if (dieRoll === 7) {
      character = function createImage() {
        var x = document.createElement("img");
        x.setAttribute("src", "img/characters/corgi-puppy.jpg");
        x.setAttribute("class", "newCharacter");
        x.setAttribute("alt", "Pug Puppy");
        document.body.appendChild(x);
      };
    } else if (dieRoll === 8) {
      character = function createImage() {
        var x = document.createElement("img");
        x.setAttribute("src", "img/characters/german-shepherd-puppy.jpg");
        x.setAttribute("class", "newCharacter");
        x.setAttribute("alt", "White German Shepherd Puppy");
        document.body.appendChild(x);
      };
    } else if (dieRoll === 9) {
      character = function createImage() {
        var x = document.createElement("img");
        x.setAttribute("src", "img/characters/golden-puppy.jpg");
        x.setAttribute("class", "newCharacter");
        x.setAttribute("alt", "Golden Retriever Puppy");
        document.body.appendChild(x);
      };
    } else if (dieRoll === 10) {
      character = function createImage() {
        var x = document.createElement("img");
        x.setAttribute("src", "img/characters/husky-puppy.jpg");
        x.setAttribute("class", "newCharacter");
        x.setAttribute("alt", "Husky Puppy");
        document.body.appendChild(x);
      };
    } else if (dieRoll === 11) {
      character = function createImage() {
        var x = document.createElement("img");
        x.setAttribute("src", "img/characters/saint-bernard-puppy.jpg");
        x.setAttribute("class", "newCharacter");
        x.setAttribute("alt", "Saint Bernard Puppy");
        document.body.appendChild(x);
      };
    } else if (dieRoll === 12) {
      character = function createImage() {
        var x = document.createElement("img");
        x.setAttribute("src", "img/characters/boston-puppy.jpg");
        x.setAttribute("class", "newCharacter");
        x.setAttribute("alt", "Boston Terrier Puppy");
        document.body.appendChild(x);
      };
    }

    document.getElementById("characterReveal").innerHTML = character;

    createImage();
  }, 1000);
}
roll();

// temporary code to test creating an image element - will be deleted once conditional statement works properly //
function createImage() {
  var x = document.createElement("img");
  x.setAttribute("class", "newCharacter");
  x.setAttribute("src", "img/characters/pug-puppy.jpg");
  x.setAttribute("alt", "Pug Puppy");
  document.body.appendChild(x);
}
createImage();
