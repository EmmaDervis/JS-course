var http = require('http');
var querystring = require('querystring');

var possibleData=querystring.stringify({
  'firstName' : 'Selma',
  'lastName' : 'Dervisevic',
  'DOB' : '1985-12-22',
  'gitUsername': 'Emma'
});

var firstName="Selma";
var lastName="Dervisevic";
var DOB="1985-12-22";
var gitUsername="Emma";


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

function editUser(options,callback,firstName,lastName,DOB,gitUsername){
  var outputData='';
  var request = http.request(options, (response) => {
  console.log(`STATUS: ${response.statusCode}`);
  console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
  response.setEncoding('utf8');
  
var changeableData=querystring.stringify({
  'firstName' : 'Selma',
  /*'lastName' : 'Imamovic',
  'DOB' : '1985-12-22',
  'gitUsername': 'Emma'  */
    
});
      
  
  if(firstName!=undefined){
      
    response.on('data', (chunk) => { 
    outputData+=chunk;
    });   
   }
   
  if(lastName!=undefined){
      
    response.on('data', (chunk) => { 
    outputData+=chunk;
    });   
   }
   if(DOB!=undefined){
      
    response.on('data', (chunk) => { 
    outputData+=chunk;
    });   
   }
   
    if(gitUsername!=undefined){
      
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

editUser(options,(outputData)=>{console.log(outputData)}, "Selma");
