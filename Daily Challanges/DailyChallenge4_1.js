var number=9;
var chess="";
var row=1;
var col=1;

for(row=1;row<=number;row++){
 
    for(col=1;col<=number;col++){
       
        if(row%2!=0){
       
            if(col%2!=0) {
            chess+="#";
            }
            else {           
            chess+=" ";
            }       
        }  
       
        else{
            if(col%2!=0) {
            chess+=" ";
            }
            else {           
            chess+="#";
            }     
            
        }
    
           
        }
        chess+="\n";
}

console.log(chess);