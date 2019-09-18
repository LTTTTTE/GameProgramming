window.addEventListener('load',drawScreen,false)
window.addEventListener('keydown',onkeydown,false)
window.addEventListener('keyup',onkeyup,false)
window.addEventListener('keypress',onkeypress,false)

var strKeyEventType = "None";
var strKeyEventValue = "None";
function drawScreen() {
    var theCanvas = document.getElementById("GameCanvas");
    var context = theCanvas.getContext("2d");
    context.fillStyle = "#505484"
    context.fillRect(0,0,800,600)
    context.fillStyle = "#111111"                   //이상하다.. context.fontStyle 이 아니네
    context.font = '25px Arial';
    context.textBaseline = "top";
    context.fillText("입력된 키 : " + strKeyEventValue,5,5);
    context.fillText("키 입력 상태 : "+strKeyEventType,5,30);
}
function onkeydown(e) {
    strKeyEventType = e.type;
    strKeyEventValue = e.key;
    drawScreen();
}
function onkeyup(e) {
    strKeyEventType = e.type;
    strKeyEventValue = e.key;
    drawScreen();
}
function onkeypress(e) {
    strKeyEventType = e.type;
    strKeyEventValue = e.key;
    drawScreen();
}
