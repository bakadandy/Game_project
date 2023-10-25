var trees_x;
var treePos_x;
var treePos_y;
var leaves_x;
var leaves_y;

var mountain_x;
var mountain_y;

var cloud_x;
var cloud_y;

var jumpSound;
var coinSound;
var deadSound;
var gameTheme;
var levelFinished;
var gameOver;

function drawBackground()
{
    drawMountains();
    drawTrees();
    drawClouds();
}

function drawClouds()
{
    for (var i = 0; i < cloud_x.length; i++)
    {
        noStroke();
        fill (255);
        ellipse (cloud_x[i],       cloud_y[i], 100, 100);
        ellipse (cloud_x[i] + 40,  cloud_y[i] - 10, 145, 110);
        ellipse (cloud_x[i] + 100, cloud_y[i] - 10, 143, 112);
        ellipse (cloud_x[i] + 40,  cloud_y[i] + 26, 100, 100);
        ellipse (cloud_x[i] + 80,  cloud_y[i] + 20, 145, 110);
        ellipse (cloud_x[i] + 140, cloud_y[i] + 22, 143, 112);

        //moving clouds
        cloud_x[i] +=1;
        if(cloud_x[i] > 4000)
        {
            cloud_x[i] -=4000;
        }
    }
}



function drawMountains()
{

    for (var i = 0; i < mountain_x.length; i++)
    {
        noStroke();
        fill (139,69,19);
        triangle (mountain_x[i],       mountain_y[i],
            mountain_x[i] + 150, mountain_y[i] - 300,
            mountain_x[i] + 250, mountain_y[i]);

        triangle (mountain_x[i] + 200, mountain_y[i] + 0,
            mountain_x[i] + 400, mountain_y[i] - 235,
            mountain_x[i] + 570, mountain_y[i] + 0);

        fill (255,255,255);
        triangle (mountain_x[i] + 100, mountain_y[i] - 200,
            mountain_x[i] + 150, mountain_y[i] - 300,
            mountain_x[i] + 183, mountain_y[i] - 200);

        triangle (mountain_x[i] + 345, mountain_y[i] - 171,
            mountain_x[i] + 400, mountain_y[i] - 235,
            mountain_x[i] + 447, mountain_y[i] - 171);
    }
}

function drawTrees()
{
    for (var i = 0; i < trees_x.length; i++)
    {
        noStroke();
        fill (80, 48, 48);
        rect(trees_x[i],treePos_y + 20,40,130);
        fill (34,139,34)
        triangle (leaves_x[i],leaves_y + 50,
            leaves_x[i] + 70,leaves_y - 50,
            leaves_x[i] + 140, leaves_y + 50);
        triangle(leaves_x[i] + 5,leaves_y + 30,
            leaves_x[i] + 70,leaves_y - 70,
            leaves_x[i] + 135, leaves_y + 30);
        triangle (leaves_x[i] + 10,leaves_y + 10,
            leaves_x[i] + 70,leaves_y - 90,
            leaves_x[i] + 130, leaves_y + 10);
        triangle (leaves_x[i] + 15,leaves_y - 10,
            leaves_x[i] + 70,leaves_y - 110,
            leaves_x[i] + 125, leaves_y - 10);
        triangle (leaves_x[i] + 20,leaves_y - 30,
            leaves_x[i] + 70,leaves_y - 130,
            leaves_x[i] + 120, leaves_y - 30);
        triangle (leaves_x[i] + 25,leaves_y - 50,
            leaves_x[i] + 70,leaves_y - 150,
            leaves_x[i] + 115, leaves_y - 50);
    }
}

function preload()
{
    soundFormats('mp3', 'wav');

    //load sounds here
    jumpSound = loadSound('sounds/jump.wav');
    coinSound = loadSound('sounds/coins.mp3');
    deadSound = loadSound('sounds/dead.mp3');
    gameTheme = loadSound('sounds/game_theme.mp3');
    gameOver = loadSound('sounds/game-over.mp3');
    levelFinished = loadSound('sounds/level_finished.mp3');

    jumpSound.setVolume(0.1);
    coinSound.setVolume(0.1);
    deadSound.setVolume(0.1);
    gameOver.setVolume(0.1);
    gameTheme.setVolume(0.1);
    levelFinished.setVolume(0.1);
}