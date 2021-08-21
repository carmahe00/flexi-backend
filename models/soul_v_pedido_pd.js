'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Soul_v_pedido_pd extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Despacho, Soul_pedidos }) {
      this.belongsTo(Despacho, { foreignKey: 'id_despacho', as: 'depacho' })
      this.belongsTo(Soul_pedidos, { foreignKey: 'id_pedido', as: 'pedido' })
    }
  };
  Soul_v_pedido_pd.init({
    nombre: {
      type: DataTypes.STRING(100)
    },
    mi_id: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    cantidad: {
      type: DataTypes.DECIMAL(15, 2)
    },
    descripcion: {
      type: DataTypes.STRING(200)
    }
  }, {
    sequelize,
    modelName: 'Soul_v_pedido_pd',
    tableName: 'soul_v_pedido_pd',
    timestamps: false
  });
  Soul_v_pedido_pd.removeAttribute('id')
  return Soul_v_pedido_pd;
};