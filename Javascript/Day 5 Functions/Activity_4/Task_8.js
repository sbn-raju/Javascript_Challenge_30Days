//Function
//Task 7:Write the function that takes Person's name and age and return a greatting message. Provide the defult value for the AGE


const greeting = (name, age=18)=>{
   const greet = `Hello ${name} and your age is ${age} have a nice day :)`
   return greet
}

console.log(greeting("Ram",20))
// Hello Ram and your age is 20 have a nice day :)


console.log(greeting("Ram"))
// Hello Ram and your age is 18 have a nice day :)
