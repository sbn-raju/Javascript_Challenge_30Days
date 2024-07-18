//Function


function isAdd(a,b){
    return a + b
}

function isPro(res,d){
    return res * d
}


function higherOrderFn(isAdd, isPro, num1, num2){
    return isPro(isAdd(num1, num2) ,num1)
    
}

console.log(higherOrderFn(isAdd, isPro, 2, 5));