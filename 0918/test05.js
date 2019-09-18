function Animal(name) {
    this.name = name;
    this.talk = function () {
        document.writeln("나의 이름은 "+this.name + "야 <br>");
    }
}

var monkey = new Animal("원숭")
var bird = new Animal("새");

monkey.talk();
bird.talk();