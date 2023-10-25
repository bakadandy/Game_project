function keyPressed() {
  // if statements to control the animation of the character when
  // keys are pressed.

  if (keyCode == 65) {
    isLeft = true;
  } else if (keyCode == 68) {
    isRight = true;
  } else if (keyCode == 87 && !isJumping) {
    jumpSound.play();
    isJumping = true;
    if (isDead) {
      isJumping = false;
    } else {
      if (gameChar_y == floorPos_y) {
        isFalling = true;
        isJumping = false;
      } else gameChar_y < floorPos_y;
      {
        isFalling = false;
        isJumping = true;
      }
    }
  }
}

function keyReleased() {
  // if statements to control the animation of the character when

  if (keyCode == 65) {
    isLeft = false;
  } else if (keyCode == 68) {
    isRight = false;
  }
}

//this function draws collectable items
function drawCollectableItems(t_collectables) {
  if (!t_collectables.isFound) {
    stroke(0);
    fill(255, 203, 20);
    ellipse(t_collectables.x_pos, t_collectables.y_pos, t_collectables.size);
    stroke(5, 4, 3);
    fill(255, 213, 120);
    rect(t_collectables.x_rect, t_collectables.y_rect, 5, 15);
  }
}
//this function checks does gameChar make a contact with collectable items or not
function checkCollectable(t_collectables) {
  if (
    dist(t_collectables.x_pos, t_collectables.y_pos, gameChar_x, gameChar_y) <
    30
  ) {
    coinSound.play();
    t_collectables.isFound = true;
    game_score += 1;
  }
}
//this function draws a flagpole
function renderFlagpole() {
  push();
  noFill();
  strokeWeight(5);
  stroke(100, 100, 100);
  line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y - 250);
  fill(255, 5, 255);
  noStroke();
  if (flagpole.isReached) {
    rect(flagpole.x_pos, floorPos_y - 250, 100, 50);
  } else {
    rect(flagpole.x_pos, floorPos_y - 50, 100, 50);
  }
  pop();
}
//this function checks does gameChar make a contact with flagpole or not
function checkFlagpole() {
  var d = abs(gameChar_x - flagpole.x_pos);
  if (d < 15) {
    flagpole.isReached = true;
  }
}
//this function checks is gameChar under the floor, if true, gameChar is dead
function checkPlayerDie() {
  if (gameChar_y > floorPos_y + 5) {
    startGame();
    deadSound.play();
    lives--;
  }
}
//this function makes platforms
function createPlatforms(x, y, length) {
  var p = {
    x: x,
    y: y,
    length: length,
    draw: function () {
      fill(128, 0, 129);
      rect(this.x, this.y, this.length, 15);
    },
    checkContact: function (gc_x, gc_y) {
      if (gc_x > this.x && gc_x < this.x + this.length) {
        var d = this.y - gc_y;
        if (d >= 0 && d < 10) {
          return true;
        }
      }
      return false;
    },
  };
  return p;
}

//I took info from https://youtu.be/lm8Y8TD4CTM
//resets all game
function resetSketch(){
  lives = 4;
  startGame();
}

console.log("lives: " + lives);
console.log("flagpole is reached: " + flagpole.isReached);
console.log("key" + keyCode);
if(keyCode == 82 && (lives == 0) || (flagpole.isReached == true && game_score >=6)){
  startGame();
  lives = 4;
}

function startGame() {
  gameChar_x = width / 2;
  cameraPosX = 0;
  gameChar_y = floorPos_y;
  velocity = {
    x: 6,
    y: 10,
  };

  isLeft = false;
  isRight = false;
  isPlummeting = false;
  isFalling = false;
  isJumping = false;
  isDead = false;

  treePos_x = width / 2;
  treePos_y = height / 2;
  leaves_y = treePos_y + 25;

  // arrays for my trees
  leaves_x = [
    0, 450, 700, 900, 1200, 1450, 1650, 1950, 2250, 2550, 2800, 3160, 3500,
    3700, 4000,
  ];
  trees_x = [
    50, 500, 750, 950, 1250, 1500, 1700, 2000, 2300, 2600, 2850, 3200, 3550,
    3750, 4050,
  ];

  // arrays for my clouds
  cloud_x = [
    0, 400, 706, 980, 1250, 1550, 1950, 2350, 2750, 3300, 3600, 3808, 4000,
  ];
  cloud_y = [
    random(0, 200),
    random(0, 200),
    random(0, 200),
    random(0, 200),
    random(0, 200),
    random(0, 200),
    random(0, 200),
    random(0, 200),
    random(0, 200),
    random(0, 200),
    random(0, 200),
    random(0, 200),
    random(0, 200),
  ];

  // arrays for my mountains
  mountain_x = [0, 500, 1000, 1500, 1900, 2400, 2900, 3400, 3800, 4200];
  mountain_y = [433, 433, 433, 433, 433, 433, 433, 433, 433, 433];

  // arrays for my canyon
  canyons_x = [600, 1000, 1800, 2400, 3000, 3600, 4000];

  // array for my collectable items
  collectables = [
    {
      x_pos: random(0, 250),
      y_pos: random(floorPos_y - 20, 330),
      size: 25,

      isFound: false,
    },

    {
      x_pos: 500,
      y_pos: random(floorPos_y - 320, 330),
      size: 25,

      isFound: false,
    },

    {
      x_pos: random(500, 1000),
      y_pos: random(floorPos_y - 20, 330),
      size: 25,

      isFound: false,
    },

    {
      x_pos: random(1000, 1500),
      y_pos: random(floorPos_y - 20, 330),
      size: 25,

      isFound: false,
    },

    {
      x_pos: random(1500, 1700),
      y_pos: random(floorPos_y - 20, 330),
      size: 25,

      isFound: false,
    },

    {
      x_pos: random(1700, 2200),
      y_pos: random(floorPos_y - 20, 330),
      size: 25,

      isFound: false,
    },

    {
      x_pos: random(2200, 2500),
      y_pos: random(floorPos_y - 20, 330),
      size: 25,

      isFound: false,
    },

    {
      x_pos: random(2500, 2800),
      y_pos: random(floorPos_y - 20, 330),
      size: 25,

      isFound: false,
    },

    {
      x_pos: random(2800, 3000),
      y_pos: random(floorPos_y - 20, 330),
      size: 25,

      isFound: false,
    },

    {
      x_pos: random(3000, 3200),
      y_pos: random(floorPos_y - 20, 330),
      size: 25,

      isFound: false,
    },

    {
      x_pos: random(3200, 3500),
      y_pos: random(floorPos_y - 20, 330),
      size: 25,

      isFound: false,
    },

    {
      x_pos: random(3500, 3800),
      y_pos: random(floorPos_y - 20, 330),
      size: 25,

      isFound: false,
    },

    {
      x_pos: random(3800, 4000),
      y_pos: random(floorPos_y - 20, 330),
      size: 25,

      isFound: false,
    },

    {
      x_pos: random(4000, 4200),
      y_pos: random(floorPos_y - 20, 330),
      size: 25,

      isFound: false,
    },

    {
      x_pos: random(4000, 4200),
      y_pos: random(floorPos_y - 20, 330),
      size: 25,

      isFound: false,
    },
  ];

  //sets the game score
  game_score = 0;
 //draws a flagpole in the end of level
  flagpole = {
    x_pos: 4500,
    isReached: false,
  };
 //draws platforms in the level
  platforms = [];
  for (var i = 0; i < 11; i++) {
    platforms.push(
      createPlatforms(
        300 + i * 400,
        floorPos_y - 80,
        random(50, 100),
        random(100, 110)
      )
    );
  }
  platforms.push(createPlatforms(400, floorPos_y - 170, 100));
  //draws enemies in the level
  enemies = [];
  enemies.push(new Enemy(100, floorPos_y - 10, 400));
  enemies.push(new Enemy(1250, floorPos_y - 10, 250));
  enemies.push(new Enemy(1550, floorPos_y - 10, 250));
  enemies.push(new Enemy(2050, floorPos_y - 10, 150));
  enemies.push(new Enemy(2250, floorPos_y - 10, 130));
  enemies.push(new Enemy(2700, floorPos_y - 10, 300));

  enemies.push(new Enemy_flying(900, 300, 100));
  enemies.push(new Enemy_flying(1300, 300, 80));
  enemies.push(new Enemy_flying(1500, 300, 100));
  enemies.push(new Enemy_flying(1800, 300, 80));
  enemies.push(new Enemy_flying(2500, 250, 100));
  enemies.push(new Enemy_flying(2800, 350, 80));
}
