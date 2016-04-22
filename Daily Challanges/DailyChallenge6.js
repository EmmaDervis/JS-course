var inicialArray=[1,2,4,3,4,5,6,6,7,8,8];


function findingDoubles (arrayWithDoubles){

var doubles=[];

    for(i=0;i<arrayWithDoubles.length;i++){

        for(j=i+1;j<arrayWithDoubles.length;j++){

            if(arrayWithDoubles[i]==arrayWithDoubles[j]){

            doubles.push(arrayWithDoubles[i]);

            }

        }

    }

return doubles;
}


var arrayOfDoubleNumbers=findingDoubles (inicialArray);

console.log(arrayOfDoubleNumbers);
