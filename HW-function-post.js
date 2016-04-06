var http=require('http');
var querystring = require('querystring');

var postData=querystring.stringify({
  'firstName' : 'Ema',
  'lastName' : 'Imamovic',
  'DOB' : '1985-12-22',
  'gitUsername': 'Emma'
});

var options={

hostname:'www.sule.io',
port: '1337',
path: '/user',
method: 'POST',
headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': postData.length
  }
};


function createUser(postData, options){

var outputData='';
var req = http.request(options, (response) => {
console.log(`STATUS: ${response.statusCode}`);
console.log(`HEADERS: ${JSON.stringify(response.headers)}`);
response.setEncoding('utf8');
  
    response.on('data', (chunk) => {
    outputData+=chunk;
    });
    response.on('end', () => {
    console.log(outputData);
    })
});

req.on('error', (e) => {
console.log (`problem with request: ${e.message}`);
});

req.write(postData);
req.end(); 
    
}

console.log(createUser(postData,options));