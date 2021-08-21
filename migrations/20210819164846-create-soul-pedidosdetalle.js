'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('soul_pedidosdetalle', {
      mi_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      precio_compra: {
        type: Sequelize.DECIMAL
      },
      precio_venta: {
        type: Sequelize.DECIMAL
      },
      cantidad: {
        type: Sequelize.DECIMAL
      },
      por_impuesto: {
        type: Sequelize.DECIMAL
      },
      total_impuesto: {
        type: Sequelize.DECIMAL,
      },
      valor: {
        type: Sequelize.DECIMAL
      },
      descripcion: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      estado: {
        type: Sequelize.INTEGER
      },
      id_producto: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('soul_pedidosdetalle');
  }
};