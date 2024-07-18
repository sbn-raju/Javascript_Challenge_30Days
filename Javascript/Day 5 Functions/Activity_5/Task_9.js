//Function
//Task 9:Write the function that takes two parameter and return their product. Provide a default paramter for the second paramter


function hello(){
    console.log("Hello")
}

let num = 5

function higherOrderFn(hello, num){
    for(let i = 0;i < num;i++){
        hello()
    }
   
}

higherOrderFn(hello, num)
