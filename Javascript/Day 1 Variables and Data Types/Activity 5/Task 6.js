//Understanding const
//Task 6:Try reassiging a variable declared with const and observed the error


const nums = 2210030034
console.log("Initial Value: " + nums) //initial value 

nums = 2210030040
console.log("Reassign Value: " + nums) //Reassign Value

//Consulsion: The value is not getting reassigned and getting error below
// nums = 2210030040
    //  ^
// TypeError: Assignment to constant variable.
    // at Object.<anonymous> 