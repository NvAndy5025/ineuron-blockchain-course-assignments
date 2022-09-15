
let marks = 110;

switch(true){
    case 0<=marks && marks<41:
        console.log("Student has failed");
        break;
    case 40<marks && marks<51:
        console.log("E grade");
        break;
    case 50<marks && marks<61:
        console.log("D grade");
        break;
    case 60<marks && marks<71:
        console.log("C grade");
        break;
    case 70<marks && marks<81:
        console.log("B grade");
        break;
    case 80<marks && marks<91:
        console.log("A grade");
        break;
    case 90<marks && marks<=100:
        console.log("S grade");
        break;
    default:
        console.log("Invalid marks");
}