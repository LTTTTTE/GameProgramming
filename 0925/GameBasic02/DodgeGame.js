window.addEventListener("load", drawScreen, false);
window.addEventListener("keydown",onkeydown,true);

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

}

function onkeydown(e) {
    e.preventDefault();
    if (e.code === 'ArrowLeft') {
        intPlayerX -= 25;
        if(intPlayerX < 0){
            intPlayerX = 0;
        }
    }
    if (e.code === 'ArrowRight') {
        intPlayerX += 25;
        if( intPlayerX > 740){
            intPlayerX = 740;
        }
    }
    if (e.code === 'ArrowUp') {
        intPlayerY -= 25;
        if(intPlayerY <0){
            intPlayerY = 0;
        }
    }
    if (e.code === 'ArrowDown') {
        intPlayerY += 25;
        if(intPlayerY > 540){
            intPlayerY = 540;
        }
    }

    drawScreen();
}