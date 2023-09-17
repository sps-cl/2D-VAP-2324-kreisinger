let background1 = getImage("background.png");

let canvasHeight = 700;
let canvasWidth = 700;

let playerX = canvasWidth / 2;
let playerY = canvasHeight / 2;
let playerWidth = 50;
let playerHeight = 50;
let playerSpeed = 5;

let bulletHeight = 15;
let bulletWidth = 6;
let bulletSpeed = 15;   
let bulletX = 0;
let bulletY = -40;
let bulletDirection = 0;

let zombieY = -50;
let zombieWidth = 50;
let zombieHeight = 50;
let zombieSpeed = 0.5;
let zombieX = new Array
let zombies = new Array(3)
for (var i = 0; i < zombies.length; i++) {
    zombieX[i] = random (0,canvasWidth)
    
}

let roundNumber = 1;
let score = 0;
let kills = 0;

function reset() {
    if (kills === zombies.length){
        roundNumber += 1;
        // Přidáme nového zombíka do pole
        zombies.push(4);
        // Resetujeme hodnoty
        kills = 0;
    }
}


function draw() {
    background(0);
    backgroundFunction();
    reset();
    drawPlayer();
    playerMovement();
    bulletCollision();
    bulletMovement();
    bulletShoot();
    drawBullet();
    drawZombie();
    zombieMovement();
    texts();
  }

 
function backgroundFunction() {
      image(background1,0,0,700,700);
}

function texts(){
    textSize(40)
    fill("yellow")
    text("Round" + " " + roundNumber ,300 ,40)

    textSize(30)
    fill("yellow")
    text("score" + " " + score,600, 650)
}

function drawPlayer() {
    fill("black")
ellipse(playerX,playerY,playerWidth,playerHeight)
}

function playerMovement() {
    if (isKeyPressed("w") && isKeyPressed("a") && playerY >= 25 && playerX >= 25){
        playerX = playerX - playerSpeed;
        playerY = playerY - playerSpeed;
        bulletDirection = 1
    } else if (isKeyPressed("w") && isKeyPressed("d") && playerY >= 25 && playerX <= 675){
        playerX = playerX + playerSpeed;
        playerY = playerY - playerSpeed;
        bulletDirection = 2
    } else if (isKeyPressed("s") && isKeyPressed("a") && playerY <= 675 && playerX >= 25){
        playerY = playerY + playerSpeed;
        playerX = playerX - playerSpeed;
        bulletDirection = 3
    } else if (isKeyPressed("s") && isKeyPressed("d") && playerY <= 675 && playerX <= 675){
        playerY = playerY + playerSpeed;
        playerX = playerX + playerSpeed;
        bulletDirection = 4
    } else if (isKeyPressed("w") && playerY >= 25) {
        playerY = playerY - playerSpeed;
        bulletDirection = 5
    } else if (isKeyPressed("s") && playerY <= 675){
        playerY = playerY + playerSpeed;
        bulletDirection = 6
    } else if (isKeyPressed("a") && playerX >= 25){
        playerX = playerX - playerSpeed;
        bulletDirection = 7
    } else if (isKeyPressed("d") && playerX <= 675) {
        playerX = playerX + playerSpeed;
        bulletDirection = 8
    } 
}


function drawBullet() {
    if (bulletY >= -20) {
        fill("white");
        rect(bulletX,bulletY,bulletWidth,bulletHeight)
    }
}

function bulletMovement() {
bulletY -= bulletSpeed;     
   
}

function bulletShoot() {
    if(isKeyPressed(" ") && bulletY <= - 20){
      bulletX = playerX - bulletWidth / 2;
      bulletY = playerY;  
    }
}

function drawZombie() {
    for (var i = 0; i < zombies.length; i++) {
    fill("green");
    ellipse(zombieX[i],zombieY,zombieWidth,zombieHeight);
    }
}

function zombieMovement() {
    for (var i = 0; i < zombies.length; i++) {
        //doprava dolu
        if (zombieX[i] < playerX && zombieY < playerY){
            zombieX[i] += zombieSpeed;
            zombieY += zombieSpeed;
        }//doleva nahoru
        else if (zombieX[i] > playerX && zombieY > playerY){
            zombieX[i] -= zombieSpeed;
            zombieY -= zombieSpeed;
        }//doprava nahoru 
        else if (zombieX[i] < playerX && zombieY > playerY){
            zombieX[i] += zombieSpeed;
            zombieY -= zombieSpeed;
        }//doleva dolu
        else if (zombieX[i] > playerX && zombieY < playerY){
            zombieX[i] -= zombieSpeed;
            zombieY += zombieSpeed;
        }//doprava
        else if (zombieX[i] < playerX) {
            zombieX[i] += zombieSpeed;
        }//dolu
        else if (zombieY < playerY) {
            zombieY += zombieSpeed;
        }//nahoru
        else if (zombieY > playerY) {
            zombieY -= zombieSpeed;    
        }//doleva 
        else if (zombieX[i] > playerX) {
            zombieX[i] -= zombieSpeed;
        }
    }    
}

function bulletCollision(index) {
    for (let i = 0; i < zombies.length; i++) { 
        if (bulletY <= zombieY + 20 && bulletX >= zombieX[i] - 25 && bulletX <= zombieX[i] + 25){
            bulletY = -20;
            bulletX += 700;
            score = score +10;
            kills += 1;
            zombies.splice(index,1)
            break; 
        }
    }
    
}

