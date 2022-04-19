const firstName:string = "lucas"
const anotherName:number = 11
const x:boolean = true

function greeting(name: string): void{
  console.log("Ola " +  name)
}

greeting(firstName)

function sum(n1:number, n2:number): number{
  return n1+n2
}

console.log(sum(1,2))