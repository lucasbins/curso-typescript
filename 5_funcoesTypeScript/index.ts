//1 - void
function withoutReturn(): void{
  console.log("Esta funcao nao tem retorno!")
  //return 1
}

withoutReturn()

//2 - callback com argumento
function greeting(name:string){
  return `Ola ${name}`
}

function preGreeting(f: (name:string) => string, userName:string ){
  console.log("Preparando a função!")

  const greet = f(userName)

  console.log(greet)
}

preGreeting(greeting, "Lucas")

//3 - Generic function
function firstElement<T>(arr: T[]): T{
  return arr[0]
}

console.log(firstElement([1,2,3]))
console.log(firstElement(["a", "b", "c"]))
//console.log(firstElement("test"))

function mergeObjects<U, T>(obj1: U, obj2: T){
  return{
    ...obj1,
    ...obj2
  }
}

const newObject = mergeObjects({name: "Lucas"}, {age: 30, job:"Dev"})

console.log(newObject)

//4 - Constraints
function biggestNumber<T extends number | string>(a: T, b: T):T{
  let biggest: T

  if(+a > +b){
    biggest = a
  }else{
    biggest = b
  }

  return biggest
}

console.log(biggestNumber(5,3))
console.log(biggestNumber("12","5"))
//console.log(biggestNumber("12",3))

//5 - especificar tipo de argumento
function mergeArrays<T>(arr1:T[], arr2: T[]){
  return arr1.concat(arr2)
}

console.log(mergeArrays([1,2,3], [4,5]))
console.log(mergeArrays<number | string>([1,2,3], ["Teste","Testando"]))

//6 - params opcionais
function modernGreeting(name: string, greet?: string){
  if(greet){
    return `Olá ${greet} ${name}, tudo bem?`
  }

  return `Olá ${name}, tudo bem?`
}

console.log(modernGreeting("Lucas"))
console.log(modernGreeting("Deise", "Srta"))

//7 - params default
function somaDefault(n:number, m = 10){
  return n + m
}

console.log(somaDefault(10))
console.log(somaDefault(15, 21))

//8 - unknown
function doSomething(x:unknown){
  if(Array.isArray(x)){
    console.log(x[0])
  }else if(typeof x === "number"){
    console.log("x é um número")
  }
}

doSomething([1,2,3])
doSomething(5)

//9 - never
function showErrorMessage(msg: string): never{
  throw new Error(msg)
}

//showErrorMessage("algum erro!")

//10 - Rest operator
function sumAll(...n: number[]){
  return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1,2,3,4,5))
console.log(sumAll(5,2454,54454))
//console.log(sumAll("teste"))

//11 - destructuring como params
function showProductDetails({name, price}: {name:string, price:number}): string{
  return `O nome do produto é ${name} e ele custa R$${price}`
}

const shirt = {name: "Camisa", price: 49.99}

console.log(showProductDetails(shirt))