//1 - type guard
function sum(a: number|  string, b:number| string){
  if(typeof a=== "string" && typeof b === "string"){
    console.log(parseFloat(a) + parseFloat(b))
  }else if(typeof a === "number" && typeof b === "number"){
    console.log(a + b)
  }else{
    console.log("Impossível realizar a soma!")
  }
}

sum("1", "59")
sum(12,432.2)
sum("4", 6)

//2 - checando se valor existe
function operations(arr: number[], operation?: string | undefined){
  switch(operation){ //narrowing
    case "sum": 
      const sum = arr.reduce((i,total) => i + total)
      console.log(sum)
      break
    case "multiply": 
      const multiply = arr.reduce((i,total) => i * total)
      console.log(multiply)
      break
    default:
      console.log("Por favor, defina uma operação")
    
  }
}

operations([1,2,3])
operations([1,2,3], "sum")
operations([1,2,5], "multiply")

//3 - instanceof
class User{
  name

  constructor(name:string){
    this.name = name
  }
}

class SuperUser extends User{
  constructor (name:string){
    super(name)
  }
}

const lucas = new User("Lucas")
const deise = new SuperUser("Deise")

console.log(lucas)
console.log(deise)

function userGreeting(user: object){
  if(user instanceof SuperUser){
    console.log(`Olá ${user.name}, deseja ver os dados do sistema?`)
  }else if(user instanceof User){
    console.log(`Olá ${user.name}`)
  }
}

userGreeting(lucas)
userGreeting(deise)

// 4 - operador in
class Dog{
  name
  breed

  constructor(name: string, breed?: string){
    this.name = name
    if(breed){
      this.breed = breed
    }
  }
}

const bombom = new Dog("Bombom")
const bob = new Dog("Bob", "Pastor Alemão")

function showDogDetails(dog: Dog){
  if('breed' in dog){
    console.log(`O cachorro ${dog.name} é de raça ${dog.breed}`)
  }else{
    console.log(`O cachorro ${dog.name} é um SRD`)
  }
}

showDogDetails(bombom)
showDogDetails(bob)

// 5 - desafio

function review(stars: number, review?: boolean ){
  if(review){
    switch(stars){
      case 1:
        console.log(`${stars} estrela - muito ruim`)
        break
      case 2:
        console.log(`${stars} estrela - ruim`)
        break
      case 3:
        console.log(`${stars} estrela - bom`)
        break
      case 4:
        console.log(`${stars} estrela - muito bom`)
        break
      case 5:
        console.log(`${stars} estrela - Execelente`)
        break
      default:
        break
    }  
  }else{
    console.log("Não vez o review")
  }
}

review(1, true)
review(2, true)
review(3, true)
review(4, true)
review(5, true)
review(8, true)
review(1, false)

// exemplo do instrutor

type Review = number | boolean

function showUserReview(review: Review){
  if(!review){
    console.log("Usuário não avaliou o produto")
    return
  }

  console.log(`A nota que voce deu foi ${review}, obrigado!`)
}

showUserReview(false)
showUserReview(2)
showUserReview(5)


