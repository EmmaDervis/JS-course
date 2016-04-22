var number=9;
var chess="";
var row=1;
var col;

while(row<=number){

col=1;
  
    while(col<=number){

        
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
     
       col++;  
	 
     }
     row++;
    
    chess+="\n";  
}


console.log(chess);