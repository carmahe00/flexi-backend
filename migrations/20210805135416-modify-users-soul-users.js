'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.addColumn(
        'soul_usuarios', // table name
        'password', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'soul_usuarios', // table name
        'role', // new field name
        {
          type: Sequelize.ENUM('DESPACHO', 'ADMINISTRACION', 'CARTA')
        },
      ),
      queryInterface.addColumn(
        'soul_usuarios', // table name
        'uuid', // new field name
        {
          type: Sequelize.UUID,
          defaultValue: Sequelize.UUIDV4,
        },
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
