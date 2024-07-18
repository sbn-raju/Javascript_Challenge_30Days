//Function
//Task 5:Write the Arrow funtion if the String contains a specific character and return a boolean value


const isConatins = (str1, alpha)=>{
    if(str1.search(alpha)>=1){
        return true
    }else{
        return false
    }
}

console.log(isConatins("Chai", "t"))