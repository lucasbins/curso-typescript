"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto esta disponivel");
    }
}
const shirt = { name: "Camisa", price: 19.99, isAvailable: true };
showProductDetails(shirt);
function showUserDetails(user) {
    console.log(`O usuario tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuario é: ${user.role}`);
    }
}
const u1 = { email: "lucas@email.com", role: "Admin" };
const u2 = { email: "deise@email.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10,
    y: 15
};
coords.z = 15;
console.log(coords);
const lucas = {
    name: "Lucas",
    age: 30
};
console.log(lucas);
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"]
};
console.log(goku);
console.log(goku.superpowers[1]);
const arnold = {
    name: "arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// 7 - readOnly Array
let myArray = ["Maçã", "Laranja", "Banana"];
//myArray[3] = "Mamão"
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
const myNumberArray = [1, 2, 3, 4, 5];
//const myNumberArray2: fiveNumbers = [1,2,3,4,5,6]
//const mixMyNumberArray: fiveNumbers = [1,2,3,4,true,"Teste"]
console.log(myNumberArray);
const anotherUser = ["Lucas", 30];
console.log(anotherUser[0]);
anotherUser[0] = "Deise";
console.log(anotherUser[0]);
//anotherUser[1]= "teste"; 
//Type 'string' is not assignable to type 'number'.
//9 - tuplas com readonly
function showNumbers(numbers) {
    //numbers[0]= 10
    //Cannot assign to '0' because it is a read-only property.
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
