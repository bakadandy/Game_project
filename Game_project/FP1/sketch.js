/*

Final Game Project

in the backgroud class: all background things, such as mountains, trees and music.
in the common class: some of the variables, I put them into this, because, I could easily find them, also, add new ones.
in the enemies and player class: all drawing codes with their variables and some logic for them.
in the fire_effect class: I used particles to make a fire effect, I thought, if I put it into interables class, I couldn't find it.
in the gameEngine class: all logic and all data about the level are there, in this class.
in the interactables class: there is data and logic about canyons.

IF YOU FALL DONW CANYON YOU WILL LOSE 2 LIVES
IF ENEMY KILLS YOU YOU WILL LOSE 1 LIFE

*****************************ENJOY THE GAME***********************************

*/

function setup() {
  createCanvas(1024, 576);
  floorPos_y = (height * 3) / 4;
  lives = 4;
  startGame();
  gameTheme.loop();
  //creates a reset button
  var button = createButton("reset");
  button.mousePressed(resetSketch);
}

function draw() {
  ///////////DRAWING CODE//////////
  background(100, 155, 255); //fill the sky blue
  //draw some green ground
  noStroke();
  fill(0, 128, 0);
  rect(0, floorPos_y, width, height - floorPos_y);

  translate(-cameraPosX, 0);

  push();
  // Draw background
  drawBackground();
  //checks for collectable items and draws them
  for (var i = 0; i < collectables.length; i++) {
    if (!collectables[i].isFound) {
      drawCollectableItems(collectables[i]);
      checkCollectable(collectables[i]);
    }
  }
  // checks for canyons and draws them
  for (var i = 0; i < canyons_x.length; i++) {
    drawCanyon(canyons_x[i]);
    checkCanyon(canyons_x[i]);
    for (let j = 0; j < 7; j++) {
      let p = new Fire(canyons_x[i] + 120);
      let d = new Fire_2(canyons_x[i] + 120);
      particles.push(p);
      particles.push(d);
    }
  // draws a fire 
    for (var k = particles.length - 1; k >= 0; k--) {
      particles[k].update();
      particles[k].show();
      if (particles[k].finished()) {
        //remove this particle
        particles.splice(k, 1);
      }
    }
  }
  // draws a flagpole
  renderFlagpole();
  //draws enemies and checks if gameChar touches it, it dies
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].draw();
    var isContact = enemies[i].checkContact(gameChar_x, gameChar_y);
    if (isContact) {
      if (lives > 0) {
        startGame();
        lives -= 1;
        deadSound.play();
        break;
      }
    }
  }
  pop();
  // draw game character
  drawGame_char();
  // shows game_score
  textSize(20);
  fill(155, 100, 155);
  noStroke();
  text("Stick-Scores:" + game_score, gameChar_x - 500, 60);
  //shows player's lives
  textSize(30);
  fill(255, 0, 0);
  noStroke();
  text("Stick-Lives:" + lives, gameChar_x - 500, 30);
  //checks if gameChar died or not
  if (lives < 1) {
    noStroke();
    fill(255, 51, 51);
    stroke(153,50,204);
    strokeWeight(3);
    textSize(50);
    text("GAME OVER", gameChar_x - 150, height / 3);
    fill(255, 127, 80);
    stroke(210,105,30);
    strokeWeight(3);
    textSize(40);
    text("press RESET button to respawn", 
      gameChar_x - 250, 
      height / 2);
    gameTheme.stop();
    gameOver.play();
    noLoop();
    return;
  }
  //checks a flagpole is reached and level finished or not
  if (flagpole.isReached == true && game_score >= 6) {
    stroke(0);
    fill(0, 255, 255);
    stroke(185, 156, 21);
    strokeWeight(3);
    textSize(40);
    text("CONGRATULATIONS!!!", gameChar_x - 150, height / 3);
    fill(255, 100, 100);
    stroke(147, 112, 219);
    strokeWeight(3);
    textSize(30);
    text(
      "Level completed!GOOD JOB.",
      gameChar_x - 200,
      height / 2
    );
    gameTheme.stop();
    levelFinished.play();
    noLoop();
    return;
  }
  //checks is flagpole is reached or not
  if (!flagpole.isReached) {
    checkFlagpole();
  }
  //checks if player died or not
  checkPlayerDie();

  // lives
  for (var i = 0; i < lives; i++) {
    fill(176, 196, 222);
    stroke(0);
    //body
    ellipse(cameraPosX + 300 - 35 * i, 30, 10, 25);
    //head
    ellipse(cameraPosX + 300 - 35 * i, 10, 15);
    //eyes
    ellipse(cameraPosX - 4 + 300 - 35 * i, 10, 2, 7);
    ellipse(cameraPosX + 4 + 300 - 35 * i, 10, 2, 7);
    //legs
    line(cameraPosX + 3 + 300 - 35 * i, 40, cameraPosX + 8 + 300 - 35 * i, 55);
    line(cameraPosX - 3 + 300 - 35 * i, 40, cameraPosX - 8 + 300 - 35 * i, 55);
    //arms
    line(cameraPosX + 4 + 300 - 35 * i, 23, cameraPosX + 15 + 300 - 35 * i, 28);
    line(cameraPosX - 4 + 300 - 35 * i, 23, cameraPosX - 15 + 300 - 35 * i, 28);
  }

  //draws platforms
  for (var i = 0; i < platforms.length; i++) {
    platforms[i].draw();
  }

  ///////////INTERACTION CODE//////////
  //Put conditional statements to move the game character below here
  // gameChar runs left
  if (isLeft) {
    gameChar_x -= velocity.x;
    cameraPosX -= velocity.x;
  }
  // gameChar runs right
  if (isRight) {
    gameChar_x += velocity.x;
    cameraPosX += velocity.x;
  }
  //gameChar jumps
  if (isJumping) {
    gameChar_y -= velocity.y;
  }
  if (gameChar_y > floorPos_y) {
    gameChar_y = floorPos_y;
    isJumping = false;
    velocity.y = 10;
  }
  // gravity and checks if game_char falling or not
  if (gameChar_y < floorPos_y) {
    var isContact = false;

    //logic to platforms
    for (var i = 0; i < platforms.length; i++) {
      if (platforms[i].checkContact(gameChar_x, gameChar_y) == true) {
        isJumping = false;
        isContact = true;
        isFalling = false;
        velocity.y = 10;
        break;
      }
    }
    //gameChar goes down if it's not on the platform
    if (isContact == false) {
      gameChar_y += 2;
      isFalling = true;

      velocity.y -= 0.25;
    } else {
      isFalling = false;
    }
  } else {
    isFalling = false;
  }
}
