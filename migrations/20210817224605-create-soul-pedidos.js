'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('soul_pedidos', {
      id_pedido: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigo: {
        type: Sequelize.STRING
      },
      fecha_inicio: {
        type: Sequelize.DATE
      },
      fecha_fin: {
        type: Sequelize.DATE
      },
      estado: {
        type: Sequelize.INTEGER
      },
      valor: {
        type: Sequelize.DECIMAL,
      },
      id_turno: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      id_cliente: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      id_servicio: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      id_puesto: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      id_pedidopadre: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      id_caja: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      descuentos: {
        type: Sequelize.DECIMAL
      },
      total: {
        type: Sequelize.DECIMAL
      },
      padre: {
        type: Sequelize.INTEGER
      },
      impuestos: {
        type: Sequelize.DECIMAL
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('soul_pedidos');
  }
};