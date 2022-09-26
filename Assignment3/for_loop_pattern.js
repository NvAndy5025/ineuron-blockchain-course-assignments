let num = 1;
pattern ="";
for(i=1;i<=4;i++){
    for(j=1;j<=i;j++){
        pattern += num+" ";
        num++;
    }
    pattern +="\n";
}
console.log(pattern);