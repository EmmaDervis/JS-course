module.exports = {
    findShopById: function(id){
        return Balance.findOne({ id: Number(id) });
    }    
};