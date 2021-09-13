// let + const
const player = "bobby";
let experience = 100;
let wizLev = false;

if (experience > 90) {
    let wizLev = true;
    console.log("inside", wizLev)
}

console.log("outside", wizLev);

const obj = {
    player: "Bobby",
    experience: 100,
    wizLev: false
}

// destructuring
const obj = {
    player: "Bobby",
    experience: 100,
    wizLev: false
}

const player = obj.player;
const experience = obj.experience;
let wizLev = obj.wizLev;

const { player, experience} = obj;
let { wizLev } = obj;

//Object properties
const name = "Mau Snow"

const obj = {
    [name]: "heloo",
    ["ray" + "smith"]: "hihi"
}

const a = "Simon";
const b = true;
const c = {};

const obj = { a, b, c };

//Template strings
const name = "Sally";
const age = 33;
const pet = "horse";

// const greeting = "Hello" + name + " you seem to be doing" + greeting;

const greetingBest = `Hello ${name} you seem to be ${age+10}. What a lovely ${pet} you have.`

//Default arguments
function greet(name="", age=30, pet="cat") {
    return `Hello ${name} you seem to be ${age+10}. What a lovely ${pet} you have.`
}

//Symbol
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");

//Arrow function
function add(a, b) {
    return a + b;
}

const add = (a, b) => a + b;