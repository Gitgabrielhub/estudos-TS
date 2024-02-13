//string, boolean, number...
let x: number = 10;
x = 12;
console.log(x);

//inferencia xannotation
let y = 12;
// erro y = 'teste';

let z: number = 12;

// tipos básicos
let firstName: string = "matheus";
let age: number = 30;
const isAdmin: boolean = true;

//string != string
console.log(typeof firstName);

//object
const myNumbers: number[] = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
myNumbers.push(4);
console.log(myNumbers);

//tuplas
let mytuple: [number, string, string[]];

mytuple = [5, "teste", ["a", "b", "c"]];

//mytulpe = [true,false,true]

//object literals ->{prop: value}

const user: { name: string; age: number } = {
  name: "pedro",
  age: 18,
};
console.log(user.name);
console.log(user.age);

// any = valor que aceita qualquer tipo de dado é uma ma pratica a ser utilizada.

let an: any = 0;
an = "teste";
an = true;
an = [];

// union type

let id: string | number = "10";
id = 10;

// type alias
type myIdType = number | string;
const userId: myIdType = 10;
const productId: myIdType = "15631";
const shirId = 12;

// enum
// tamanho de roupas(size:médio, size:pequeno)
enum Size {
  P = "pequeno",
  M = "Médio",
  G = "grande",
  XL = " extra grande",
}
const camisa = {
  model: "camisa gola v",
  size: Size.G,
};
console.log(camisa);

// literal types

let teste: "Autenticado" | null;

teste = "Autenticado";
teste = null;

// funções

function Soma(a: number, b: number) {
  return a * b;
}
console.log(Soma(10, 10));

function SayHello(name: string): string {
  return `hello ${name}`;
}
SayHello("gabriel");

function logger(msg: string): void {
  console.log(msg);
}
logger("teste");
function greeting(name: string, greet?: string): void {
  if (greet) {
    console.log(`ola ${greet} ${name}`);
  }
  console.log(`olá ${name}`);
}
greeting("gabriel");
greeting("sir");

//interface
interface MathFunctionsParams {
  n1: number;
  n2: number;
}

function sumNubers(nums: MathFunctionsParams) {
  return nums.n1 + nums.n2;
}
function multiplyNumbers(nums: MathFunctionsParams) {
  return nums.n1 * nums.n2;
}

console.log(sumNubers({ n1: 5, n2: 5 }));
console.log(multiplyNumbers({ n1: 5, n2: 5 }));

//nerrowing
//checagem de tipos

function doSomething(info: number | boolean) {
  if (typeof info === "number") {
    console.log(`o numero é: ${info}`);
  }
  console.log("nao foi passado um numero");
}
doSomething(10);
doSomething(true);

// generics
// ao inves de expecificar o tipo de parametro. e uma amneira de nao exoecificar o any
function showArraysItems<T>(arr: T[]) {
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
  name;
  role;
  age;
  isAproved;

  constructor(name: string, role: string, age: number, isApproved: boolean) {
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
  showUserRole(canShow: boolean): void {
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

// interfaces em classes
interface IVeiculo {
  brand: string;
  showBrand(): void;
}
class Car implements IVeiculo {
  brand;
  wheels;

  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }
  showBrand(): void {
    console.log(`a marca do carro é: ${this.brand}`);
  }
}
const fusca = new Car("VW", 4);
console.log(fusca);

// herança
class superCar extends Car {
  engine;
  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels);
    this.engine = engine;
  }
}
const x1 = new superCar("bmw", 4, 2.5);
console.log(x1);

//decorators
//constructor decorator
function BaseParameters() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.random() * 1;
      createdAt = new Date();
    };
  };
}
@BaseParameters()
class person {
  name;
  constructor(name: string) {
    this.name = name;
  }
}
const sam = new person("sam");
console.log(sam);
