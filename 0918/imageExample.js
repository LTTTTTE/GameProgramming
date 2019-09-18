var imgWarrior = new Image();
imgWarrior.src = "resources/noBack.png";
imgWarrior.addEventListener('load',drawScreen,false);

function drawScreen() {
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");
    Context.fillStyle = "#fd7361";
    Context.fillRect(0,0,8000,8000);

    Context.drawImage(imgWarrior,10,10,400,600);
}