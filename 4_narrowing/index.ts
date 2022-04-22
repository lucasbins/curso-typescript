// 1 - arrays

let numbers: number[] = [1,2,3]

numbers.push(5)

console.log(numbers[2])

// numbers = "teste" - um array de number nao pode add string

const nomes: string[] = ["Matheus", "Lucas"]

// nomes.push(4) - um array de string nao pode add number

// 2 - outra sintaxe de array
const nums: Array<number> = [100, 200]

nums.push(300)

console.log(nums)

//nums.push("teste")

console.log(nums[0])

// 3 - any

const arr1: any = [1, "teste", true, [], {nome:"lucas"} ]

console.log(arr1)

// 4 - parametro tipados

function soma(a:number , b:number){
  console.log(a+b)
}

soma(4,5)

//soma("teste", 1)

// 5 - retorno de funcao

function greeting(name: string): string{
  return `Olá ${name}`
}

console.log(greeting("Lucas"))

// 6 - funcaoes anonimas

setTimeout(function() {
  const sallary: number = 1000
  //console.log(parseFloat(sallary))
  //console.log(sallary)
}, 2000)

// 7 - tipos de objeto

function passCoordinates(coord: {x: number, y:number}){
  console.log("X coordinates: " + coord.x)
  console.log("y coordinates: " + coord.y)
}
const objCoord = {x: 329, y: 84.2}
passCoordinates(objCoord)


// 8 - props opcionais

function showNumbers(a:number, b:number, c?:number){
  console.log("A: " + a)
  console.log("B: " + b)
  if(c){
    console.log("C: " + c)
  }
}

showNumbers(1,2,3)
showNumbers(1,2)
//showNumbers(1)

// 9 - validacao props opcionais
function advanceGreenting(firstName: string, lastName?: string){
  if(lastName !== undefined){
    return `olá, ${firstName} ${lastName}, tudo bem?`
  }

  return `Olá, ${firstName}, tudo bem?`
}

console.log(advanceGreenting("Lucas", "Braga"))
console.log(advanceGreenting("Deise"))

// 10 - Union types
function showBalance(balance: string | number){
  console.log(`O saldo da conta é R$ ${balance}`)
}

showBalance(100)
showBalance("500")

const arr2: Array<number| string | boolean> = [1, "teste", true]
console.log(arr2)

// 11 - avancando union types
function showUserRole(role: boolean | string){
  if(typeof role === "boolean"){
    return "Usuario não aprovado!"
  }
  return `A função do usuário é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

// 12 - type alias
type ID = string | number

function showId( id : ID ){
  console.log(`Meu id é: ${id}`)
}

showId(1)
showId("200")

// 13 - interface
interface Point {
  x: number
  y: number
  z: number
}

function showCoords(obj: Point){
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj: Point={
  x: 10,
  y: 15,
  z: 20
}

showCoords(coordObj)

// 14 - interfaces x type alias

interface Person{
  name: string
}

interface Person{
  age: number
}

const somePerson : Person = { name:"Lucas" , age: 30}

console.log( somePerson)

type personType = {
  name: string
}

//type personType = { age: number } type como se fosse const

//15 - literal types
let test: "testando"

test = "testando"

console.log(test)

function showDirection(direction: "left" | "right" | "center"){
  console.log(`A direção é: ${direction}`)
}

showDirection("left")

//showDirection("Top")

// 16 - non-null assertion operations

const p = document.getElementById("some-p")

console.log(p!.innerText)

// 17 - bigint
let n: bigint

//n = 1

n = 1000n

console.log(n)
console.log(typeof n)

// 18 - symbol
let symbolA:symbol = Symbol("a")
let symbolB = Symbol("b")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)
