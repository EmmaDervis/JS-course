//Task 4 - FILTERED LS from learnyounode

var fs=require('fs');
var path=require('path');
var filteredList=[];

fs.readdir(process.argv[2],(err,list)=>{
    
    if(err) throw err;
    
    for(i=0;i<list.length;i++){
        
    
       if(path.extname(list[i])==process.argv[3]){
        filteredList.push(list[i]);
        }
    }
    
  console.log(filteredList);
})