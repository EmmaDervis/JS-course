//Task 3 - MyFirst I/O from learnyounode

var fs=require('fs');


var arrayOfseperatedRows;
var numberOfNewLines;

var fileConteiner=fs.readFileSync(process.argv[2],'utf8');

var arrayOfseperatedRows=fileConteiner.split('\n');

numberOfNewLines=(arrayOfseperatedRows.length)-1;


console.log(numberOfNewLines);