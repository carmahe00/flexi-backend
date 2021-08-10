'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('soul_usuarios', {
      id_usuario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      
      login: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nombres: {
        type: Sequelize.STRING,

      },
      cargo: {
        type: Sequelize.STRING,
        
      },
      correo: {
        type: Sequelize.STRING(126).BINARY,
        allowNull: false,
        unique: true
      },
      clave: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.INTEGER
      },
      clave: {
        type: Sequelize.STRING,
      },
      despachos : {
        type: Sequelize.INTEGER,
      },
      administracion : {
        type: Sequelize.INTEGER,
      },
      carta : {
        type: Sequelize.INTEGER,
      },
      permiso_general:{
        type: Sequelize.INTEGER,
      },
      tipo: {
        type: Sequelize.INTEGER
      },
      fecha_estado: {
        type: Sequelize.DATEONLY

      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('soul_usuarios');
  }
};