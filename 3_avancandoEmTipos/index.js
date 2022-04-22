// 1 - arrays
var numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
// numbers = "teste" - um array de number nao pode add string
var nomes = ["Matheus", "Lucas"];
// nomes.push(4) - um array de string nao pode add number
// 2 - outra sintaxe de array
var nums = [100, 200];
nums.push(300);
console.log(nums);
//nums.push("teste")
console.log(nums[0]);
// 3 - any
var arr1 = [1, "teste", true, [], { nome: "lucas" }];
console.log(arr1);
// 4 - parametro tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
//soma("teste", 1)
// 5 - retorno de funcao
function greeting(name) {
    return "Ol\u00E1 ".concat(name);
}
console.log(greeting("Lucas"));
// 6 - funcaoes anonimas
setTimeout(function () {
    var sallary = 1000;
    //console.log(parseFloat(sallary))
    //console.log(sallary)
}, 2000);
// 7 - tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("y coordinates: " + coord.y);
}
var objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
// 8 - props opcionais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(1, 2);
//showNumbers(1)
// 9 - validacao props opcionais
function advanceGreenting(firstName, lastName) {
    if (lastName !== undefined) {
        return "ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem?");
    }
    return "Ol\u00E1, ".concat(firstName, ", tudo bem?");
}
console.log(advanceGreenting("Lucas", "Braga"));
console.log(advanceGreenting("Deise"));
// 10 - Union types
function showBalance(balance) {
    console.log("O saldo da conta \u00E9 R$ ".concat(balance));
}
showBalance(100);
showBalance("500");
var arr2 = [1, "teste", true];
console.log(arr2);
// 11 - avancando union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuario não aprovado!";
    }
    return "A fun\u00E7\u00E3o do usu\u00E1rio \u00E9: ".concat(role);
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log("Meu id \u00E9: ".concat(id));
}
showId(1);
showId("200");
function showCoords(obj) {
    console.log("X: ".concat(obj.x, " Y: ").concat(obj.y, " Z: ").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
var somePerson = { name: "Lucas", age: 30 };
console.log(somePerson);
//type personType = { age: number } type como se fosse const
//15 - literal types
var test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log("A dire\u00E7\u00E3o \u00E9: ".concat(direction));
}
showDirection("left");
//showDirection("Top")
// 16 - non-null assertion operations
var p = document.getElementById("some-p");
console.log(p.innerText);
// 17 - bigint
var n;
//n = 1
n = 1000n;
console.log(n);
console.log(typeof n);
// 18 - symbol
var symbolA = Symbol("a");
var symbolB = Symbol("b");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
