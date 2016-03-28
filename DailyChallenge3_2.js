// Reverse text
var text="I code in javascript";
var textLength;
var reverse="";

for(textLength=text.length;textLength>0;textLength--){
 
 reverse+=(text.substring(textLength,textLength-1));
}

console.log(text+" in reverse is: "+reverse);