let background1 = getImage("background.png");
let zombiePng = getImage("zombie.png");
let agentPng = getImage("agent.png");

let canvasHeight = 700;
let canvasWidth = 700;

let playerX = canvasWidth / 2;
let playerY = canvasHeight / 2;
let playerWidth = 50;
let playerHeight = 50;
let playerSpeed = 5;


let bulletHeight = 10;
let bulletWidth = 10
let bulletSpeed = 20   
let bulletX = 0;
let bulletY = -40;

let zombieY = new Array;
let zombieWidth = 50
let zombieHeight = 50
let zombieSpeed = 2
let zombieX = new Array;
let zombies = new Array(3);
let zombieDmg = 1;

let score = 0;
let hp = 20;
let roundNumber = 1;
let maxSkore = 0;

function end(){
    if (hp <= 1) {
        completeReset()
    }
}

for (let i = 0; i < zombies.length; i++) {
    zombieX[i] = random (0,canvasWidth)
    zombieY[i] = 0
} 

function draw() {
    background(0);
backgroundFunction();


reset();
drawPlayer();
playerMovement();
bulletMovement();
bulletShoot();
drawBullet();
drawZombie(); 
zombieDamage();
zombieMovement();
bulletCollision();
maxScore();
texts();
end();
}

 
function backgroundFunction() {
      image(background1,0,0,700,700);
}

function drawPlayer() {
    fill("black")
image(agentPng,playerX,playerY,playerWidth *2,playerHeight *2)
}

function playerMovement() {
    if (isKeyPressed("w") && isKeyPressed("a") && playerY >= 25 && playerX >= 25){
        playerX = playerX - playerSpeed;
        playerY = playerY - playerSpeed;
    } else if (isKeyPressed("w") && isKeyPressed("d") && playerY >= 25 && playerX <= 675){
        playerX = playerX + playerSpeed;
        playerY = playerY - playerSpeed;
    } else if (isKeyPressed("s") && isKeyPressed("a") && playerY <= 675 && playerX >= 25){
        playerY = playerY + playerSpeed;
        playerX = playerX - playerSpeed;
    } else if (isKeyPressed("s") && isKeyPressed("d") && playerY <= 675 && playerX <= 675){
        playerY = playerY + playerSpeed;
        playerX = playerX + playerSpeed;
    } else if (isKeyPressed("w") && playerY >= 25) {
        playerY = playerY - playerSpeed;
    } else if (isKeyPressed("s") && playerY <= 675){
        playerY = playerY + playerSpeed;
    } else if (isKeyPressed("a") && playerX >= 25){
        playerX = playerX - playerSpeed;
    } else if (isKeyPressed("d") && playerX <= 675) {
        playerX = playerX + playerSpeed;
    } 
}

function zombieMovement() {
    for (var i = 0; i < zombies.length; i++) {
        //doprava dolu
        zombieX != zombieX + zombieWidth
        if (zombieX[i] < playerX && zombieY[i] < playerY){
            zombieX[i] += zombieSpeed;
            zombieY[i] += zombieSpeed;
        }//doleva nahoru
        else if (zombieX[i] > playerX && zombieY[i] > playerY){
            zombieX[i] -= zombieSpeed;
            zombieY[i] -= zombieSpeed;
        }//doprava nahoru 
        else if (zombieX[i] < playerX && zombieY[i] > playerY){
            zombieX[i] += zombieSpeed;
            zombieY[i] -= zombieSpeed;
        }//doleva dolu
        else if (zombieX[i] > playerX && zombieY[i] < playerY){
            zombieX[i] -= zombieSpeed;
            zombieY[i] += zombieSpeed;
        }//doprava
        else if (zombieX[i] < playerX) {
            zombieX[i] += zombieSpeed;
        }//dolu
        else if (zombieY[i] < playerY) {
            zombieY[i] += zombieSpeed;
        }//nahoru
        else if (zombieY[i] > playerY) {
            zombieY[i] -= zombieSpeed;    
        }//doleva 
        else if (zombieX[i] > playerX) {
            zombieX[i] -= zombieSpeed;
        }
    }    
}



function drawBullet() {
    if (bulletY >= -20) {
        fill("white");
        rect(bulletX,bulletY,bulletWidth,bulletHeight)
      }
}

function bulletMovement() {
if (bulletY >= -20) {
bulletY -= bulletSpeed;   
    }
}

function bulletShoot() {
    if(isKeyPressed(" ") && bulletY <= - 20){
      bulletX = playerX + 40;
      bulletY = playerY;
    }
}

function drawZombie() {
    for (var i = 0; i < zombies.length; i++) {
    
    image(zombiePng,zombieX[i],zombieY[i],zombieWidth ,zombieHeight );
    }
}


function zombieDamage() {
    for (var i = 0; i < zombieX.length; i++) {
        if (zombieX[i] <= playerX +  10 && zombieX[i] >= playerX - 10 && zombieY[i] <= playerY + 10 && zombieY[i] >= playerY - 10   ) {
        hp = hp - zombieDmg;   
        zombieX.splice(i,1);
        zombieY.splice(i,1);
        break;            
        } 
    
    }
}

function bulletCollision() {
    for (let i = 0; i < zombieX.length; i++) { 
        if (bulletY <= zombieY[i] + 25 && bulletX >= zombieX[i] - 15 && bulletX <= zombieX[i] + 45 ){
            bulletY = -20;
            bulletX += 700;
            score = score +10;
            zombieX.splice(i,1);
            zombieY.splice(i,1);
            break; 
        }
    }
    
}

function texts(){
    textSize(30)
    fill("black")
    text("score:" + " " + score,10, 100)

    fill("red")
    text("HP:" + " " + hp,600, 100)
    
    fill("blue")
    text("round:" + " " + roundNumber ,300, 100)
    text("(enemies left:" + " " + zombieX.length + ")" , 250, 150)

    fill("black")
    text("max score:" + " " + maxSkore, 10, 130)

}

function reset() {
    if (zombieX.length == 0) {
        roundNumber = roundNumber + 1;
        zombieSpeed += 0.1 ;
        zombies.push(1)

        for (let i = 0; i < zombies.length; i++) {
            zombieX[i] = random (0,canvasWidth);
            zombieY[i] = 0;
        } 
    }
}

function completeReset() {
    playerX = canvasWidth / 2;
    playerY = canvasHeight / 2;

    bulletHeight = 10;
    bulletWidth = 10
    bulletSpeed = 20   
    bulletX = 0;
    bulletY = -40;

    zombieY = new Array;
    zombieWidth = 50
    zombieHeight = 50
    zombieSpeed = 2
    zombieX = new Array;
    zombies = new Array(3);
    zombieDmg = 1;

    score = 0;
    hp = 20;
    roundNumber = 1;
        
    for (let i = 0; i < zombies.length; i++) {
        zombieX[i] = random (0,canvasWidth)
        zombieY[i] = 0
    } 
}

function maxScore(){
    if (maxSkore < score){
        maxSkore = score
    }
}
