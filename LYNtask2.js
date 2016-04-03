//Task 2 - Baby steps from learnyounode

console.log(process.argv);

var sumOfNumbers=0;

    for(var i=2;i<process.argv.length;i++){
    
    sumOfNumbers+=(parseInt(process.argv[i]));
    }
    
    
console.log(sumOfNumbers);

