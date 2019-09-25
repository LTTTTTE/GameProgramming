window.addEventListener("load", drawScreen, false);
window.addEventListener("keydown",onkeydown,true);

var GAME_STATE_READY = 0;
var GAME_STATE_GAME = 1;
var GAME_STATE_OVER = 2;

var gameState = GAME_STATE_READY;
var speed = 5;
var imgBackground = new Image();
imgBackground.src = "img/background.png";
imgBackground.addEventListener("load",drawScreen,false);

var imgPlayer = new Image();
imgPlayer.src = "img/player.png";
imgPlayer.addEventListener("load",drawScreen,false);

var intPlayerX = 350;
var intPlayerY = 250;

function drawScreen() {
    var theCanvas = document.getElementById("Canvas");
    var context = theCanvas.getContext("2d");

    context.fillStyle = "#000000";
    context.fillRect(0,0,800,600);

    context.drawImage(imgBackground,0,0);
    context.drawImage(imgPlayer, intPlayerX, intPlayerY);

    context.fillStyle = "#ffffff";
    context.font = '50px Arial';
    context.textBaseline = "top";

    if(gameState === GAME_STATE_READY){
        context.fillText("준비", 330, 180);
    } else if(gameState === GAME_STATE_GAME){

    } else if(gameState === GAME_STATE_OVER){
        context.fillText("게임 오버",300, 180);
    }
}

function onkeydown(e) {

    if(gameState === GAME_STATE_READY){

        if(e.code === 'Enter'){
            gameState = GAME_STATE_GAME;
        }
    }
    if(gameState === GAME_STATE_GAME) {
        e.preventDefault();
        if (e.code === 'ArrowLeft') {
            intPlayerX -= 5 * speed;
            if(intPlayerX < 0){
                gameOver();
            }
        }
        if (e.code === 'ArrowRight') {
            intPlayerX += 5 * speed;
            if( intPlayerX > 740){
                gameOver();
            }
        }
        if (e.code === 'ArrowUp') {
            intPlayerY -= 5 * speed;
            if(intPlayerY <0){
                gameOver();
            }
        }
        if (e.code === 'ArrowDown') {
            intPlayerY += 5 * speed;
            if(intPlayerY > 540){
                gameOver();
            }
        }
    }
    if(gameState === GAME_STATE_OVER){
        if(e.code === 'Enter'){
            gameState = GAME_STATE_READY;
        }
    }
    drawScreen();
}

function gameOver() {
    intPlayerX = 350;
    intPlayerY = 250;
    gameState = GAME_STATE_OVER;
}