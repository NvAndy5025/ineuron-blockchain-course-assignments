let year = 2100;

function checkIfYearIsLeap(year){
    if((year%4===0 && year%100===0 && year%400===0) || (year%4===0 && year%100!==0)){
        return "is a leap year.";
    }
    else{
        return "is NOT a leap year";
    }
}

console.log(`The year ${year} `+checkIfYearIsLeap(year));