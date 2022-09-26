
let num = 145;
let sumOfFactOfEachDigit = 0;

let numString = num.toString();

for(i=0;i<numString.length;i++){
    if(numString.charAt(i)==0){
        sumOfFactOfEachDigit += 1;
    }else{
        let factorial = 1;
        for(j=1;j<=numString.charAt(i);j++){
            factorial *= j;
        }
        sumOfFactOfEachDigit += factorial;
    }
}

console.log(num===sumOfFactOfEachDigit?"It is a Special number." : "It is not a Special number.");