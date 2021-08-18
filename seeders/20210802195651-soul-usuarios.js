'use strict';
const bcryptjs = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('soul_usuarios', [
      {
        login: 'John',
        nombres: 'John Doe',
        uuid: uuidv4(),
        password: bcryptjs.hashSync('123456'),
        correo: 'example@example.com'

      },
      {
        login: 'Dohe',
        nombres: 'Doe',
        uuid: uuidv4(),
        password: bcryptjs.hashSync('123456'),
        correo: 'example0@example.com'

      },
      {
        login: 'Dohe1',
        nombres: 'Doe1',
        uuid: uuidv4(),
        password: bcryptjs.hashSync('123456'),
        correo: 'example1@example.com'

      },
      {
        login: 'Dohe2',
        nombres: 'Doe2',
        uuid: uuidv4(),
        password: bcryptjs.hashSync('123456'),
        correo: 'example2@example.com'

      },
      {
        login: 'Dohe3',
        nombres: 'Doe3',
        uuid: uuidv4(),
        password: bcryptjs.hashSync('123456'),
        correo: 'example3@example.com'

      },
      {
        login: 'Dohe4',
        nombres: 'Doe4',
        uuid: uuidv4(),
        password: bcryptjs.hashSync('123456'),
        correo: 'example4@example.com'

      },
      {
        login: 'Dohe5',
        nombres: 'Doe5',
        uuid: uuidv4(),
        password: bcryptjs.hashSync('123456'),
        correo: 'example5@example.com'

      },
      {
        login: 'Dohe6',
        nombres: 'Doe6',
        uuid: uuidv4(),
        password: bcryptjs.hashSync('123456'),
        correo: 'example6@example.com'

      },
      {
        login: 'Dohe7',
        nombres: 'Doe7',
        uuid: uuidv4(),
        password: bcryptjs.hashSync('123456'),
        correo: 'example7@example.com'

      },
      {
        login: 'Dohe8',
        nombres: 'Doe8',
        uuid: uuidv4(),
        password: bcryptjs.hashSync('123456'),
        correo: 'example8@example.com'

      },
      {
        login: 'Dohe9',
        nombres: 'Doe9',
        uuid: uuidv4(),
        password: bcryptjs.hashSync('123456'),
        correo: 'example9@example.com'

      },
      {
        login: 'Dohe10',
        nombres: 'Doe10',
        uuid: uuidv4(),
        password: bcryptjs.hashSync('123456'),
        correo: 'example10@example.com'

      },
      {
        login: 'Dohe11',
        nombres: 'Doe11',
        uuid: uuidv4(),
        password: bcryptjs.hashSync('123456'),
        correo: 'example11@example.com'

      },
      {
        login: 'Dohe12',
        nombres: 'Doe12',
        uuid: uuidv4(),
        password: bcryptjs.hashSync('123456'),
        correo: 'example12@example.com'

      },
      {
        login: 'Dohe13',
        nombres: 'Doe13',
        uuid: uuidv4(),
        password: bcryptjs.hashSync('123456'),
        correo: 'example13@example.com'

      },
      {
        login: 'Dohe14',
        nombres: 'Doe14',
        uuid: uuidv4(),
        password: bcryptjs.hashSync('123456'),
        correo: 'example14@example.com'

      },
      {
        login: 'Dohe15',
        nombres: 'Doe15',
        uuid: uuidv4(),
        password: bcryptjs.hashSync('123456'),
        correo: 'example15@example.com'

      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('soul_usuarios', null, {});
  }
};
