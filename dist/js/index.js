"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//string, boolean, number...
let x = 10;
x = 12;
console.log(x);
//inferencia xannotation
let y = 12;
// erro y = 'teste';
let z = 12;
// tipos básicos
let firstName = "matheus";
let age = 30;
const isAdmin = true;
//string != string
console.log(typeof firstName);
//object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(4);
console.log(myNumbers);
//tuplas
let mytuple;
mytuple = [5, "teste", ["a", "b", "c"]];
//mytulpe = [true,false,true]
//object literals ->{prop: value}
const user = {
    name: "pedro",
    age: 18,
};
console.log(user.name);
console.log(user.age);
// any = valor que aceita qualquer tipo de dado é uma ma pratica a ser utilizada.
let an = 0;
an = "teste";
an = true;
an = [];
// union type
let id = "10";
id = 10;
const userId = 10;
const productId = "15631";
const shirId = 12;
// enum
// tamanho de roupas(size:médio, size:pequeno)
var Size;
(function (Size) {
    Size["P"] = "pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "grande";
    Size["XL"] = " extra grande";
})(Size || (Size = {}));
const camisa = {
    model: "camisa gola v",
    size: Size.G,
};
console.log(camisa);
// literal types
let teste;
teste = "Autenticado";
teste = null;
// funções
function Soma(a, b) {
    return a * b;
}
console.log(Soma(10, 10));
function SayHello(name) {
    return `hello ${name}`;
}
SayHello("gabriel");
function logger(msg) {
    console.log(msg);
}
logger("teste");
function greeting(name, greet) {
    if (greet) {
        console.log(`ola ${greet} ${name}`);
    }
    console.log(`olá ${name}`);
}
greeting("gabriel");
greeting("sir");
function sumNubers(nums) {
    return nums.n1 + nums.n2;
}
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log(sumNubers({ n1: 5, n2: 5 }));
console.log(multiplyNumbers({ n1: 5, n2: 5 }));
//nerrowing
//checagem de tipos
function doSomething(info) {
    if (typeof info === "number") {
        console.log(`o numero é: ${info}`);
    }
    console.log("nao foi passado um numero");
}
doSomething(10);
doSomething(true);
// generics
// ao inves de expecificar o tipo de parametro. e uma amneira de nao exoecificar o any
function showArraysItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM:  ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArraysItems(a1);
showArraysItems(a2);
//classes OO
class User {
    constructor(name, role, age, isApproved) {
        this.name = name;
        this.role = role;
        this.age = age;
        this.isAproved = isApproved;
    }
    showUserName() {
        console.log(`o nome do  usuario é: ${this.name}`);
    }
    showUserAge() {
        console.log(`a idade do ${this.name} é ${this.age}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`idade do usuario é: ${this.role}`);
        }
        console.log("informações restrita");
    }
}
const gabriel = new User("gabriel", "admin", 21, true);
console.log(gabriel);
gabriel.showUserName();
gabriel.showUserAge();
gabriel.showUserRole(true);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`a marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("VW", 4);
console.log(fusca);
// herança
class superCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const x1 = new superCar("bmw", 4, 2.5);
console.log(x1);
//decorators
//constructor decorator
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random() * 1;
                this.createdAt = new Date();
            }
        };
    };
}
let person = class person {
    constructor(name) {
        this.name = name;
    }
};
person = __decorate([
    BaseParameters()
], person);
const sam = new person("sam");
console.log(sam);
