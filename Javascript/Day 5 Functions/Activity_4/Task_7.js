//Function
//Task 7:Write the function that takes two parameter and return their product. Provide a default paramter for the second paramter


const product = (a,b=10)=>{
    return a*b
}

console.log(product(20,2))//40
console.log(product(20))//200

