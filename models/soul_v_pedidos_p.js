'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class soul_v_pedidos_p extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Despacho, Soul_pedidos }) {
      // define association here
      this.belongsTo(Despacho, { foreignKey: 'id_despacho', as: 'despacho' })
      this.belongsTo(Soul_pedidos, { foreignKey: 'id_pedido', as:'pedido' })
    }
  };
  soul_v_pedidos_p.init({

    id_turno: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    fecha_inicio: {
      type: DataTypes.DATE
    },
    puesto: {
      type: DataTypes.STRING(100)
    }
  }, {
    sequelize,
    modelName: 'Soul_v_pedidos_p',
    tableName: 'soul_v_pedidos_p',
    timestamps: false,

  });
  soul_v_pedidos_p.removeAttribute('id')
  return soul_v_pedidos_p;
};