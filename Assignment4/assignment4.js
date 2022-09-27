let step = 4;
let numOfMatches = 0;
function matchHouse(step){
    if(step>=1){
        numOfMatches = (step*5)+1;
    }
}
matchHouse(step);
console.log(`Number of matches ${numOfMatches}`);
