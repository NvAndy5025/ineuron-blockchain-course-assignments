let num = 4;
let numOfMatches = 0;
function matchHouse(num){
    if(num>=1){
        numOfMatches = (num*5)+1;
    }
}
matchHouse(num);
console.log(`Number of matches ${numOfMatches}`);
