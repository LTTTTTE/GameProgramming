window.addEventListener("load",drawScreen,false);
window.addEventListener("keydown",onkeydown,false);

var TimerID = setInterval(onLevelUp, 5000);

var intLevel = 1;
var bShowLevelUpMessage = false;

var imgChar = new Image();
imgChar.src = "character.png";
imgChar.addEventListener("load",drawScreen,false);

function drawScreen() {
    var theCanvas = document.getElementById("Canvas");
    var context = theCanvas.getContext("2d");

    context.fillStyle = "#000000";
    context.fillRect(0, 0, 320, 480);

    context.drawImage(imgChar, 100, 180);

    context.fillStyle = "#ffffff";
    context.font = '25px Arial';
    context.textBaseline = "top";
    context.fillText("Lv : " + intLevel, 130,300);
    if(bShowLevelUpMessage){
        context.fillText("Level Up !!!", 100, 150);
    }
}

function onLevelUp() {
    intLevel++;

    bShowLevelUpMessage = true;
    setTimeout(closeLevelUpMessage, 3000);

    if(intLevel >= 5){
        clearInterval(TimerID);
    }
    drawScreen();
}

function closeLevelUpMessage() {
    bShowLevelUpMessage = false;
    drawScreen();
}
