module.exports = {
    //Find balance for user
    findBalanceForUserId: function(userId){
        return Balance.findOne({ accountUser: Number(userId) });
    },
    //Find balance for shop
     findBalanceForShopId: function(shopId){
        return Balance.findOne({ accountShop: Number(shopId) });
    }       
};