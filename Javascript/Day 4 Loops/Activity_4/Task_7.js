//Loops 
//Task 6:Write the program to print the patterns using nested loop
// *
// **
// ***
// ****
let n = 5
for(let i = 0;i<n;i++){
    let pattern = "";
    for(let j = 0;j<=i;j++){
        pattern += "* "
    }
    console.log(pattern);
}


