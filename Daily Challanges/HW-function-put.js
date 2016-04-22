var http = require('http');
var querystring = require('querystring');

var possibleData=querystring.stringify({
  'firstName' : 'Ema',
  'lastName' : 'Imamovic',
  'DOB' : '1985-12-22',
  'gitUsername': 'Emma'
});

var changeableData=JSON.parse({
  "firstName" : "Selma"
  
});


var id = 37;

var options = {
  hostname: 'www.sule.io',
  port: 1337,
  path: `/user/${id}`,
  method: 'PUT',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': possibleData.length
  }
};

function editUser(changeableData,id,options,callback){
  var outputData='';
  var request = http.request(options, (response) => {
  console.log(`STATUS: ${response.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
  response.setEncoding('utf8');
  
  if(changeableData.firstName!=undefined){
      
    response.on('data', (chunk) => { 
    outputData+=chunk;
    });   
   }
   
  if(changeableData.lastName!=undefined){
      
    response.on('data', (chunk) => { 
    outputData+=chunk;
    });   
   }
   if(changeableData.DOB!=undefined){
      
    response.on('data', (chunk) => { 
    outputData+=chunk;
    });   
   }
   
    if(changeableData.gitUsername!=undefined){
      
    response.on('data', (chunk) => { 
    outputData+=chunk;
    });   
   }
 
    response.on('end', () => {
    return callback(outputData);
    })
});
  
  

request.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

request.write(changeableData);
request.end(); 

}

editUser(changeableData,options,(outputData)=>{console.log(outputData)});