let num = 371;
let armStrngVal = 0;

let stringNum = num.toString();
for(i=0; i<stringNum.length;i++){
    armStrngVal += (stringNum.charAt(i)*stringNum.charAt(i)*stringNum.charAt(i));
}

console.log(num===armStrngVal?"It is a Armstrong number." : "It is not a Armstrong number.");