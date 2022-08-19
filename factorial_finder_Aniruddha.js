let inputNum = 8;
let ans = inputNum;
for(i = inputNum-1; i>=1; i--){
    ans = ans*i;
}
console.log(`Factorial of ${inputNum} is ${ans}`);
