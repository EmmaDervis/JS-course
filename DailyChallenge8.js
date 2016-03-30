var initialArray=[4,3,2,5,8,3,6,10];




function sortArray(array){
    var continueSorting = true;
    
    while(continueSorting){
        continueSorting = false;
        
        for(i=0;i<array.length;i++){
            if(array[i]>array[i+1]){            
                var temp=array[i];
                array[i]=array[i+1];
                array[i+1]=temp;
                continueSorting = true;
            }            
        }
    }
    
    return array; 
}


function removeDuplicates(arrayWithDuplicates){
    
    var sortedArray=sortArray(initialArray);
    var sortedArrayWithoutDuplicates=[];
    
        for(i=0;i<sortedArray.length;i++){
            if(sortedArray[i]!=sortedArray[i+1]){
       
            sortedArrayWithoutDuplicates.push(sortedArray[i])
            }
        }

return sortedArrayWithoutDuplicates;
}



console.log(sortArray(initialArray));

console.log(removeDuplicates(initialArray));

