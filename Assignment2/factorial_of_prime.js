
let num1=1;
let num2=10;

function calcFactorialOfPrimeBtwn(num1, num2){
    let factorial = 1;
    for(i=num1;i<=num2;i++){
        if(!(i<=1)){
            if(i===2){
                factorial = factorial*i;
            }else if(i%2!=0){
                let isPrime =true;
                for(j=3;j<i;j++){
                    if(i%j===0){
                        isPrime = false;
                        break;
                    }
                }
                if(isPrime){
                    factorial = factorial*i;
                }
            }
        }
    }
    console.log(factorial);
}

calcFactorialOfPrimeBtwn(num1,num2);

//1,2,3,4,5,6,7,8,9,10