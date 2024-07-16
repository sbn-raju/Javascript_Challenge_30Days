let year = 2023

if(year % 4 == 0){
    console.log("Leap year")
    if(year % 4 == 0 && year % 400 == 0){
        console.log("Leap year")
    }
}
else{
    console.log("Non leap Year");
}