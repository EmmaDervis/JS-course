/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      firstName : {
          type: 'string', 
          required: true
      },
      lastName : {
          type: 'string', 
          required: true
      },
      birthDate: {
          type: 'date', 
          required: true
      },
      username: {
            type: 'string',
            required: true,
            alphanumeric: true,
            maxLength: 20,
            unique: true   
      },
      country:{
          type: 'string', 
          enum: ['Bosnia and Herzegovina', 'Croatia', 'Serbia', 'Slovenia', 'Montenegro', 'USA']
      },
      image: {
        type: 'string', 
        defaultsTo: 'http://www.freebanking.org/avatars/schuler.png'  
      },
      email: {
        type: 'string',
        email: true, 
        required: true, 
        unique: true  
      },
      gender: {
            type: 'string',
            enum: ['Male', 'Female', 'Other'],
            required: true
      },
      
      cars:{
          collection: 'car',
          via: 'ownerUser'
      },
      accountsUser:{
          collection:'balance',
          via: 'accountUser'
      }
  }
  
};


