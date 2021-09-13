// Reference type
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };

// Context vs scope
// function b() {
//     let a = 4;
// }

const object4 = {
    a: function() {
        console.log(this);
    }
}

// Instantiation
class Player {
    constructor(name, type) {
        console.log("player", this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizzard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log("wizzard", this);
    }
    play() {
        console.log(`I'm a ${this.type}`);
    }
}

const wizzard1 = new Wizzard("Shelly", "Healer");
const wizzard2 = new Wizzard("Shawn", "Dark magic");