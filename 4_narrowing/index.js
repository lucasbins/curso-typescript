"use strict";
//1 - type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar a soma!");
    }
}
sum("1", "59");
sum(12, 432.2);
sum("4", 6);
//2 - checando se valor existe
function operations(arr, operation) {
    switch (operation) { //narrowing
        case "sum":
            const sum = arr.reduce((i, total) => i + total);
            console.log(sum);
            break;
        case "multiply":
            const multiply = arr.reduce((i, total) => i * total);
            console.log(multiply);
            break;
        default:
            console.log("Por favor, defina uma operação");
    }
}
operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([1, 2, 5], "multiply");
//3 - instanceof
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const lucas = new User("Lucas");
const deise = new SuperUser("Deise");
console.log(lucas);
console.log(deise);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, deseja ver os dados do sistema?`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}`);
    }
}
userGreeting(lucas);
userGreeting(deise);
// 4 - operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const bombom = new Dog("Bombom");
const bob = new Dog("Bob", "Pastor Alemão");
function showDogDetails(dog) {
    if ('breed' in dog) {
        console.log(`O cachorro ${dog.name} é de raça ${dog.breed}`);
    }
    else {
        console.log(`O cachorro ${dog.name} é um SRD`);
    }
}
showDogDetails(bombom);
showDogDetails(bob);
