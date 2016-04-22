/**
 * Balance.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      bankName:{
          type:'string'
      },
      accauntNumber:{
          type:'string',
          integer:true,
          required:true
      },
      accountBalance:{
          type:'string',
          integer:true,
          required:true
      },
      accountUser:{
          model:'user'
      },
      accountShop:{
          model:'shop'
      }
  }
};

