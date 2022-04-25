// 1 - tipo de objeto para funcao com interface
interface Product{
  name: string
  price: number
  isAvailable: boolean
}

function showProductDetails(product: Product){
  console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)
  if(product.isAvailable){
    console.log("O produto esta disponivel")
  }
}

const shirt: Product = {name: "Camisa",price: 19.99,isAvailable: true}

showProductDetails(shirt)

// 2 - propriedade opcional em interface
interface User {
  email: string
  role?: string
}

function showUserDetails( user: User){
  console.log(`O usuario tem o e-mail: ${user.email}`)
  if(user.role){
    console.log(`A função do usuario é: ${user.role}`)
  }
}

const u1: User = {email: "lucas@email.com", role: "Admin"}
const u2: User = {email: "deise@email.com"}

showUserDetails(u1)
showUserDetails(u2)

// 3 - readonly
interface Car{
  brand: string
  readonly wheels: number
}

const fusca:Car = {
  brand: "VW",
  wheels: 4
}

console.log(fusca)
//fusca.wheels = 5

//4 - index signature
interface CoordObject{
  [index: string] : number
}

let coords: CoordObject = {
  x:10,
  y:15
}

coords.z = 15

console.log(coords)

//5 - extends
interface Human {
  name: string
  age: number
}

interface SuperHuman extends Human {
  superpowers: string[]
}

const lucas: Human = {
  name: "Lucas",
  age: 30
}

console.log(lucas)

const goku: SuperHuman = {
  name: "Goku",
  age: 50,
  superpowers: ["Kamehameha", "Genki Dama"]
}

console.log(goku)
console.log(goku.superpowers[1])

// 6 - intersections types
interface Character{
  name:string
}

interface Gun {
  type: string
  caliber: number
}

type humanWithGun = Character & Gun

const arnold: humanWithGun ={
  name:"arnold",
  type: "Shotgun",
  caliber: 12
}

console.log(arnold)
console.log(arnold.caliber)

// 7 - readOnly Array
let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"]

//myArray[3] = "Mamão"

console.log(myArray)

myArray.forEach((item) => {
  console.log("Fruta: " + item)
})

myArray = myArray.map((item) => {
  return `Fruta: ${item}`
})

//8 - tuplas
type fiveNumbers = [number, number, number,number, number]

const myNumberArray: fiveNumbers = [1,2,3,4,5]
//const myNumberArray2: fiveNumbers = [1,2,3,4,5,6]
//const mixMyNumberArray: fiveNumbers = [1,2,3,4,true,"Teste"]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser: nameAndAge= ["Lucas", 30]

console.log(anotherUser[0])

anotherUser[0] = "Deise"

console.log(anotherUser[0])

//anotherUser[1]= "teste"; 
//Type 'string' is not assignable to type 'number'.

//9 - tuplas com readonly
function showNumbers(numbers: readonly[number, number]){
  //numbers[0]= 10
  //Cannot assign to '0' because it is a read-only property.
  console.log(numbers[0])
  console.log(numbers[1])
}

showNumbers ([1,2])