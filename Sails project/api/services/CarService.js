module.exports = {

    //Find car by ID
    getCarById: function(id) {
        sails.log.info("Getting car by id: " + id);
        return Car.findOne({ id: Number(id) });
    },
    //Test function - to see how promises work, called by test function in CarController
    getUserByCar: function(car) {
        var userId = car.ownerUser;
        sails.log("Get user By Car");
        if (userId) {
            return [User.findOne({ id: userId }), car];
        }
    },

  
};

