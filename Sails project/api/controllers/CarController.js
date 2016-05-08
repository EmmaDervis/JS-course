/**
 * CarController
 *
 * @description :: Server-side logic for managing cars
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {

    //Test function...checking how promices work
    test: function(req, res) {
        sails.log.info("I have been called");

        CarService.getCarById(1)
            .then(CarService.getUserByCar)
            .catch(function(error) { ErrorService.log(error, res); })
            .spread(function(konacnoUser, car) {
                sails.log("dosli smo konacno");
                sails.log.info(konacnoUser);
                sails.log.info(car);
            })
            .catch(function(error) { ErrorService.log(error, res); });
    },
    //Creating new car that has an owner
    createCarWithOwner: function(req, res) {
        Car.create(req.params.all())
            .then(function(newCar) {
                res.json(newCar);
                sails.log.info(newCar);
            })
            .catch(function(error) { ErrorService.log(error, res); })

    },

    //Find a car owned by specific user
    getCarsFromUser: function(req, res) {
        Car.find({ where: { ownerUser: req.body.ownerUser } })
            .then(function(carForUser) {
                res.json(carForUser);
                sails.log.info(carForUser);
            })
            .catch(function(error) { ErrorService.log(error, res); })
    },
    //Find a car owned by specific shop
    getCarsFromShop: function(req, res) {
        Car.find({ where: { ownerShop: req.body.ownerShop } })
            .then(function(carForShop) {
                res.json(carForShop);
                sails.log.info(carForShop);
            })
            .catch(function(error) { ErrorService.log(error, res); })
    },
    //Buy car if you have enough money

    buyCar: function(req, res) {
        var userId = Number(req.param('user_id'));
        var shopId = Number(req.param('shop_id'));
        var carId = Number(req.param('car_id'));

        //XOR funkcija unutar if ispod -> samo jedan parametar prolazi 
        if ((userId && !shopId) || (!userId && shopId)) {
            //If buyer is user
            if (userId) {
                 
                var businesData = {};//variable in which we save value of every "then" return

                BalanceService.findBalanceForUserId(userId)
                    .then(function(balance) {
                        businesData.userBalance = balance;
                        return CarService.getCarById(carId);
                    })
                    .then(function(car) {
                        businesData.car = car;
                        return BalanceService.findBalanceForShopId(car.ownerShop);
                    })
                    .then(function(shopBalance) {
                        businesData.shopBalance = shopBalance;
                        sails.log.info(businesData);

                        businesData.userMoney = Number(businesData.userBalance.accountBalance);
                        businesData.carPrice = Number(businesData.car.priceBuyCar);
                        businesData.shopMoney = Number(businesData.shopBalance.accountBalance);
                        businesData.formerOwner = businesData.car.ownerShop;
                        if (businesData.userMoney >= businesData.carPrice) {
                            return Car.update({ id: carId }, { ownerShop: null, ownerUser: userId });
                        }

                        throw "There is not enough money!";
                    })
                    .then(function() {
                       // sails.log.info("There is enough money");
                        var newUserAccountBalance = businesData.userMoney - businesData.carPrice;

                        return Balance.update({ accountUser: userId }, { accountBalance: newUserAccountBalance });
                    })
                    .then(function() {
                        var newShopAccountBalance = businesData.shopMoney + businesData.carPrice;

                        return Balance.update({ accountShop: businesData.formerOwner }, { accountBalance: newShopAccountBalance });
                    })
                    .then(function() {
                        res.json("User bought a car!");
                    })
                    .catch(function(error) { ErrorService.log(error, res); });
            }
            //if buyer is shop
            else if (shopId) {
                var businesData = {};
                BalanceService.findBalanceForShopId(shopId)
                    .then(function(shopBalance) {
                        businesData.shopBalance = shopBalance;
                        return CarService.getCarById(carId);
                    })
                    .then(function(car) {
                        businesData.car = car;
                        return BalanceService.findBalanceForUserId(businesData.car.ownerUser);
                    })
                    .then(function(userBalance) {
                        businesData.userBalance = userBalance;
                        businesData.shopMoney = Number(businesData.shopBalance.accountBalance);
                        businesData.carPrice = Number(businesData.car.priceBuyCar);
                        businesData.userMoney = Number(businesData.userBalance.accountBalance);
                        businesData.formerOwner=Number(businesData.car.ownerUser);

                        if (businesData.shopMoney >= businesData.carPrice) {
                            return Car.update({ id: carId }, { ownerUser: null, ownerShop: shopId });
                        }
                        throw "There is not enough money";
                    })
                    .then(function() {
                        var newShopAccountBalance = businesData.shopMoney - businesData.carPrice;
                        sails.log(newShopAccountBalance);
                        return Balance.update({ accountShop: shopId }, { accountBalance: newShopAccountBalance });
                    })
                    .then(function() {
                        var newUserAccountBalance = businesData.userMoney + businesData.carPrice;
                        sails.log.info(newUserAccountBalance);
                        return Balance.update({ accountUser: businesData.formerOwner }, { accountBalance: newUserAccountBalance });
                    })
                    .then(function(){
                        
                       sails.log.info("Shop bought a car");
                       res.json("Shop bought a car!");
                    })
                    .catch(function(error){ErrorService.log(error,res);})

            }
        }
        else {
            res.json({ errorMessage: 'Something is not right.' });
        }
    },

    rentCar: function(req, res) {
        Car.findOne({ id: Number(req.param("car_id")) }).exec(function(err, car) {
            if (err)
                res.json(err);
            else {
                sails.log.info("Owned by shop: ", car.ownerShop);
                sails.log.info("Rented: ", car.rented);
                sails.log.info("car: ", car);
                if (car.ownerShop != null && car.rented == null) {
                    Car.update({ id: Number(req.param('car_id')) }, { rented: req.param("user_id") }).exec(function(err, data) {
                        if (err) {
                            res.json(err);
                        }
                        else {
                            res.json(data);
                        }
                    });
                }
                else {
                    res.json({ "errorMessage": "Car rented or not owned by shop!!!" });
                }
            }
        })
    },

    returnCar: function(req, res) {
        Car.findOne({ id: Number(req.param("car_id")) }).exec(function(err, car) {
            if (err) {
                res.json(err);
            }
            else {
                if (car.rented != null) {
                    Car.update({ id: Number(req.param("car_id")) }, { rented: null }).exec(function(err, data) {
                        if (err) {
                            res.json(err);
                        }
                        else {
                            res.json(data);
                        }
                    })
                }
                else {
                    res.json({ "errorMessage": "Car is not rented!!!" });
                }
            }
        })
    }

};