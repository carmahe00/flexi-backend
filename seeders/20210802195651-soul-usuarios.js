'use strict';
const bcryptjs = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    return queryInterface.bulkInsert('soul_usuarios', [{
      login: 'John',
      nombres:'John Doe',
      uuid: uuidv4(),
      password: bcryptjs.hashSync('123456'),
      correo: 'example@example.com'
      
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('soul_usuarios', null, {});
  }
};
