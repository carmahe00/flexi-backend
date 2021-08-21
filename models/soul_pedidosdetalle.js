'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class soul_pedidosdetalle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Soul_pedidos, Despacho }) {
      this.belongsTo(Soul_pedidos, { foreignKey: 'id_pedido' })
      this.belongsTo(Despacho, { foreignKey: {
        field: 'id_despacho',
        allowNull: false,
        defaultValue: 1
      }, as:'despacho' })
    }
  };
  soul_pedidosdetalle.init({
    mi_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    precio_compra: {
      type: DataTypes.DECIMAL(15, 2),
      defaultValue: 0.00
    },
    precio_venta: {
      type: DataTypes.DECIMAL(15, 2),
      defaultValue: 0.00
    },
    cantidad: {
      type: DataTypes.DECIMAL(15, 2),
      defaultValue: 0.00
    },
    por_impuesto: {
      type: DataTypes.DECIMAL(15, 2),
      defaultValue: 0.00
    },
    total_impuesto: {
      type: DataTypes.DECIMAL(15, 2),
      defaultValue: 0.00
    },
    valor: {
      type: DataTypes.DECIMAL(15, 2),
      defaultValue: 0.00
    },
    descripcion: {
      type: DataTypes.STRING(200),
    },
    nombre: {
      type: DataTypes.STRING(100),
    },
    estado: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    id_producto: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Soul_pedidosdetalle',
    tableName: 'soul_pedidosdetalle',
    timestamps: false
  });
  return soul_pedidosdetalle;
};