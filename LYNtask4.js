//Task 4 - MyFirst ASYNC I/O from learnyounode

var fs=require('fs');

fs.readFile(process.argv[2],'utf8',(err,data)=>{
    
    if(err) throw err;
    
    var arrayOfStrings=data.split('\n');
    var numberofRows=arrayOfStrings.length-1;
    console.log(numberofRows);
    
})
