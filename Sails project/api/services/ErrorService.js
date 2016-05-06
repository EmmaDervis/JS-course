module.exports = {
    log: function(error, response) {
        sails.log.error("I was called to log error");
        sails.log.error(error);
        
        if(response){
           response.json(error); 
        }
    }
};