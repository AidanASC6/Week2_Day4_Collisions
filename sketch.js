//declaring variables section

//players variables
let posX = 25;
let posY = 25;
let mySpeed = 3;

//enemy variable
let enemyPosX, enemyPosY;
let enemyWidth = 50, enemyHeight = 50;

//collisions
let myLeft;
let myRight;
let myTop;
let myBottom;
let enemyLeft;
let enemyRight;
let enemyTop;
let enemyBottom;
let points = 0;
function setup() {
    createCanvas(500,500);
    background(0);
    rectMode(CENTER);

    fill(0,0,255);
    rect(25,25,50,50);

    enemyPosX = random(25,475);
    enemyPosY = random(25,475);
    clefairy = loadImage("clefairy.png");
    togepi = loadImage("togepi.png");
}

function draw() {
    background(0);
    // fill(255,0,0);
    // rect(enemyPosX,enemyPosY,50,50);
    //togepi drawin
    Image(togepi,enemyPosX,enemyPosY,enemyWidth,enemyHeight);

    // fill(0,0,255);
    // rect(posX,posY,50,50);
    //clefairy drawin
    Image(clefairy,posX,posY,50,50);
    //if left arrow is pressed
    if (keyIsDown(LEFT_ARROW)) {
        posX -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
        posX += 3;
    }
    if (keyIsDown(UP_ARROW)) {
        posY -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
        posY += 3;
    }
    //know my edges
    myLeft = posX - 25;
    myRight = posX + 25;
    myTop = posY - 25;
    myBottom = posY + 25;

    //define enemy edges
    enemyLeft = enemyPosX - 25;
    enemyRight = enemyPosX + 25;
    enemyTop = enemyPosY - 25;
    enemyBottom = enemyPosY + 25;

    if(myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {
        //does nothing
    }
    else{
        text('I am engaging the enemy!',255,480);
        background(0);
        fill(255,0,0);
        points++;
        enemyPosX = random(25,475);
        enemyPosY = random(150,450);
    }
        fill(255);
        text('Enemies destroyed' + points, 340,25)

}   