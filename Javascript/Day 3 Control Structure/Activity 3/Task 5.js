//Controller Structure
//Task 4: Write the program that uses a switch case to assign a grade (A, B, C, D, F) based on the score and log grade of the console



const grade = 90

switch(grade){
    case grade >= 90:
        console.log("A");
        break;
    case 80 >= grade && 90 < grade:
        console.log("B");
        break;
    case 65 >= grade && 79 < grade:
        console.log("C");
        break;
    case 55 >= grade && 64 < grade:
        console.log("D");
        break;
    default:
        console.log("F");
}