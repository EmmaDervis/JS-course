//Task 7 - HTTP client - Learnyounode

var http=require('http');

http.get(process.argv[2], (response)=>{
    
    console.log('Got response:'+response.statusCode);
    response.resume();
    response.setEncoding('utf8');
    response.on('data', (data)=>{
    
    console.log(data);
    
})

response.on('error', (error)=>{
    
    console.log(error);
})
    
    })

