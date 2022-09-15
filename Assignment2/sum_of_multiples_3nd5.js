
function calcSumOfMultiplesOf3nd5Under1000(){
    let sum =0;
    for(i=0; i<1000; i++){
        if(i%3===0 || i%5===0){
            sum +=i;
        }
    }
    console.log(sum);
}

calcSumOfMultiplesOf3nd5Under1000();