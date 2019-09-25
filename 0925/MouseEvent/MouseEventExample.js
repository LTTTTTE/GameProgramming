window.addEventListener("load", drawScreen, false);
window.addEventListener("mousemove", onMouseMove, false);
window.addEventListener("mousedown", onMouseDown, false);
window.addEventListener("mouseup", onMouseUp, false);

var imgIcon = new Image();
imgIcon.src = "icon.png";
imgIcon.addEventListener("load", drawScreen, false);

var bMouseClicked = false;
var intMouseX = 60;
var intMouseY = 60;
var strMouseStatus = "None";


function drawScreen() {

    var theCanvas = document.getElementById("Canvas");
    var context = theCanvas.getContext("2d");

    context.fillStyle = "#000000";
    context.fillRect(0,0,1000,800);
    context.drawImage(imgIcon,intMouseX,intMouseY);

    context.fillStyle = "#ffffff";
    context.font = '25px Arial';
    context.textBaseline = "top";
    context.fillText("발생한 마우스 포인터 : " + strMouseStatus, 5, 5);
    context.fillText("마우스 좌표 x : " + intMouseY + "y : " + intMouseY,5,30);
}

function onMouseMove(e) {

    var theCanvas = document.getElementById("Canvas");
    var context = theCanvas.getContext("2d");

    strMouseStatus = "Move";
    if(bMouseClicked){
        intMouseX = e.clientX - theCanvas.offsetLeft;
        intMouseY = e.clientY - theCanvas.offsetTop;

        drawScreen();
    }
}

function onMouseDown(e) {

    var theCanvas = document.getElementById("Canvas");
    var context = theCanvas.getContext("2d");
    strMouseStatus = "Down";

    intMouseX = e.clientX - theCanvas.offsetLeft;
    intMouseY = e.clientY - theCanvas.offsetTop;
    bMouseClicked = true;

    drawScreen();
}
function onMouseUp() {

    var theCanvas = document.getElementById("Canvas");
    var context = theCanvas.getContext("2d");
    strMouseStatus = "Up";
    bMouseClicked = false;
    intMouseY = 0;
    intMouseX = 0;

    drawScreen();
}
