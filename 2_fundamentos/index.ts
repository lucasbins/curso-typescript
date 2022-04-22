// 1 - numbers
let x: number = 10

console.log(x)

console.log(typeof x)

const  y:number = Math.random()

console.log(typeof y)
console.log(y)
console.log(y.toPrecision(3))

//2 - string

const firstName: string = "Lucas"

console.log(firstName.toUpperCase())

let fullName:string

const lastName: string = "Braga"

fullName = firstName + " " + lastName

console.log(fullName)
console.log(typeof fullName)

//3 - boolean

let a: boolean = false
console.log(a)
console.log(typeof a)

a = true
console.log(a)

//4 - inferene e annotation

let ann: string = "Teste"

let inf = "Teste"

//ann = 1
//inf = 1

//5 - desafio 2 -

let n1: number = 22

let numString: string = n1.toString()

let concatString = "Meu numero é: " + numString

console.log(concatString)


