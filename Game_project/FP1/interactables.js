var canyons_x;
var collectables;
let particles = [];

function checkCanyon(t_canyons_x)
{
    // gamechar is falling under the t_canyon
    if ((gameChar_x < (t_canyons_x + 250)) && (gameChar_x > t_canyons_x) && gameChar_y >= floorPos_y)
    {
        isPlummeting = true;
        isDead = true;
        isRight = false;
        isLeft = false;
        lives--;
        if (isPlummeting == true && isDead == true)
        {
            gameChar_y += 10;
        }
    }
}

function drawCanyon(t_canyons_x)
{
    noStroke();
    fill (238, 127, 19);
    rect (t_canyons_x, 433 , 250 , 150 );
}