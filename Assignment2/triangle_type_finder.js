
let side1=10;
let side2=10;
let side3=10;

function dertermineTriangleType(side1,side2,side3){
    if(side1===side2 && side2===side3){
        console.log("It is a equilateral triangle.")
    }else if(side1===side2 || side2===side3 || side3===side1){
        console.log("It is isosceles triangle.")
    }else{
        console.log("It is scalene triangle.")
    }
}

dertermineTriangleType(side1,side2,side3);