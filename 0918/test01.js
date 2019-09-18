var myJob = "학생";
var money = 0;
switch (myJob) {
    case "학생":
        money = 100;
        break;
    case "아르바이트생":
        money = 1000;
        break;
    case "사장" :
        money = 10000;
        break;
    default :
        money = 1;
        break;
}
document.writeln("");
document.writeln("나의돈" + money);