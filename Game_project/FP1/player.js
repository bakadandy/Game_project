var gameChar_x;
var gameChar_y;
var floorPos_y;

var isFalling;
var isLeft;
var isRight;
var isPlummeting;
var isJumping;
var isDead;
var velocity;

var lives;

function drawGame_char()
{
    if(isLeft && isFalling)
    {
        // add your jumping-left code
        fill (255);
        stroke (0);
        //body
        ellipse (gameChar_x, gameChar_y - 35, 15,40);
        //head
        ellipse (gameChar_x, gameChar_y - 66,20);
        //eyes
        fill (0);
        ellipse(gameChar_x - 6, gameChar_y - 67, 5, 10);
        //legs
        line (gameChar_x + 3, gameChar_y - 17, gameChar_x + 5,gameChar_y - 3);
        line (gameChar_x + 5 ,gameChar_y - 3, gameChar_x + 15, gameChar_y + 3 );
        line (gameChar_x - 3, gameChar_y - 17, gameChar_x - 10,gameChar_y - 6);
        line (gameChar_x - 10 ,gameChar_y - 6, gameChar_x + 1, gameChar_y + 3 );
        //arms
        line (gameChar_x + 8,gameChar_y - 40,gameChar_x + 15,gameChar_y - 32);
        line (gameChar_x ,gameChar_y - 47,gameChar_x - 5,gameChar_y - 32);
        line (gameChar_x - 5, gameChar_y - 32, gameChar_x - 15, gameChar_y - 42);
        //way's lines
        line (gameChar_x + 8, gameChar_y - 50, gameChar_x + 20, gameChar_y - 30);
        line (gameChar_x + 10, gameChar_y - 30, gameChar_x + 20, gameChar_y - 10);
    }
    else if(isRight && isFalling)
    {
        // add your jumping-right code

        fill (255);
        stroke (0);
        //body
        ellipse (gameChar_x, gameChar_y - 35, 15,40);
        //head
        ellipse (gameChar_x, gameChar_y - 66,20);
        //eyes
        fill (0);
        ellipse(gameChar_x + 6, gameChar_y - 67, 5, 10);
        //legs
        line (gameChar_x  + 3, gameChar_y - 17, gameChar_x + 5,gameChar_y - 3);
        line (gameChar_x + 5 ,gameChar_y - 3, gameChar_x - 5, gameChar_y + 3 );
        line (gameChar_x  - 3, gameChar_y - 17, gameChar_x - 5,gameChar_y - 3);
        line (gameChar_x - 5 ,gameChar_y - 3, gameChar_x - 15, gameChar_y + 3 );
        //arms
        line (gameChar_x + 8,gameChar_y - 40,gameChar_x + 15,gameChar_y - 32);
        line (gameChar_x ,gameChar_y - 47,gameChar_x - 10,gameChar_y - 32);
        line (gameChar_x - 10,gameChar_y - 32, gameChar_x, gameChar_y - 25);
        //way's lines
        line (gameChar_x - 8, gameChar_y - 50, gameChar_x - 20, gameChar_y - 20);
        line (gameChar_x - 10, gameChar_y - 30, gameChar_x - 20, gameChar_y - 10);

    }
    else if(isLeft)
    {
        // add your walking left code

        fill (255);
        stroke (0);
        //body
        ellipse (gameChar_x, gameChar_y - 35, 15,40);
        //head
        ellipse (gameChar_x, gameChar_y - 66,20);
        //eyes
        ellipse(gameChar_x - 6, gameChar_y - 67, 5, 10);
        //legs
        line (gameChar_x + 3, gameChar_y - 17, gameChar_x + 5,gameChar_y - 3);
        line (gameChar_x + 5 ,gameChar_y - 3, gameChar_x + 15, gameChar_y + 3 );
        line (gameChar_x - 4, gameChar_y - 17, gameChar_x - 10,gameChar_y  + 3);
        //arms
        line (gameChar_x + 8,gameChar_y - 40,gameChar_x + 15,gameChar_y - 32);
        line (gameChar_x ,gameChar_y - 47,gameChar_x - 15,gameChar_y - 32);
        //way's lines
        line (gameChar_x + 8, gameChar_y - 50, gameChar_x + 20, gameChar_y - 50);
        line (gameChar_x + 10, gameChar_y - 30, gameChar_x + 20, gameChar_y - 30);

    }
    else if(isRight)
    {
        // add your walking right code

        fill (255);
        stroke (0);
        //body
        ellipse (gameChar_x, gameChar_y - 35, 15,40);
        //head
        ellipse (gameChar_x, gameChar_y - 66,20);
        //eyes
        ellipse(gameChar_x + 6, gameChar_y - 67, 5, 10);
        //legs
        line (gameChar_x + 3, gameChar_y - 17, gameChar_x + 10,gameChar_y + 3);
        line (gameChar_x  - 3, gameChar_y - 17, gameChar_x - 5,gameChar_y - 3);
        line (gameChar_x - 5 ,gameChar_y - 3, gameChar_x - 15, gameChar_y + 3 );
        //arms
        line (gameChar_x + 8,gameChar_y - 40,gameChar_x + 15,gameChar_y - 32);
        line (gameChar_x ,gameChar_y - 47,gameChar_x - 15,gameChar_y - 32);
        //way's lines
        line (gameChar_x - 8, gameChar_y - 50, gameChar_x - 20, gameChar_y - 50);
        line (gameChar_x - 10, gameChar_y - 30, gameChar_x - 20, gameChar_y - 30);

    }
    else if(isFalling || isPlummeting)
    {
        // add your jumping facing forwards code

        fill (255);
        stroke (0);
        //body
        ellipse (gameChar_x, gameChar_y - 39, 15,35);
        // head
        ellipse (gameChar_x, gameChar_y - 66,20);
        //eyes
        fill(0);
        ellipse(gameChar_x - 5, gameChar_y - 67, 5, 10);
        ellipse(gameChar_x + 5, gameChar_y - 67, 5, 10);
        // legs
        line (gameChar_x + 5, gameChar_y - 27, gameChar_x + 10,gameChar_y - 10);
        line (gameChar_x + 10,gameChar_y - 10, gameChar_x + 5, gameChar_y + 3 );
        line (gameChar_x - 5, gameChar_y - 27, gameChar_x - 10,gameChar_y  - 5);
        line (gameChar_x - 10,gameChar_y - 5, gameChar_x ,gameChar_y - 5 );
        // arms
        line (gameChar_x + 6,gameChar_y - 47,gameChar_x + 20,gameChar_y - 62);
        line (gameChar_x - 6, gameChar_y - 47,gameChar_x - 20,gameChar_y - 72);
        line (gameChar_x - 16, gameChar_y - 54, gameChar_x - 16, gameChar_y - 16);
        line (gameChar_x + 16, gameChar_y - 44, gameChar_x + 16, gameChar_y - 26);
    }
    else
    {
        // add your standing front facing code

        fill (255);
        stroke (0);
        //body
        ellipse (gameChar_x, gameChar_y - 35, 15,40);
        //head
        ellipse (gameChar_x, gameChar_y - 66,20);
        //eyes
        ellipse(gameChar_x - 5, gameChar_y - 67, 5, 10);
        ellipse(gameChar_x + 5, gameChar_y - 67, 5, 10);
        //legs
        line (gameChar_x + 4, gameChar_y - 17, gameChar_x + 10,gameChar_y + 3);
        line (gameChar_x - 4, gameChar_y - 17, gameChar_x - 10,gameChar_y  + 3);
        //arms
        line (gameChar_x + 7,gameChar_y - 47,gameChar_x + 15,gameChar_y - 32);
        line (gameChar_x - 7,gameChar_y - 47,gameChar_x - 15,gameChar_y - 32);
    }
}
