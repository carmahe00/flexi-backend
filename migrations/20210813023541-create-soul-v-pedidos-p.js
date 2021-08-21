'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('soul_v_pedidos_p', {
      id_turno: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      fecha_inicio:{
        type: Sequelize.DATE
      },
      puesto:{
        type: Sequelize.STRING(100)
      }
      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('soul_v_pedidos_p');
  }
};