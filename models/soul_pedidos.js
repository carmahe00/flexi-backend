'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Soul_pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Soul_usuarios, Soul_v_pedido_pd }) {
      this.belongsTo(Soul_usuarios, { foreignKey: 'id_usuario' })
      this.hasMany(Soul_v_pedido_pd, { foreignKey: 'id_pedido' })
    }
  };
  Soul_pedidos.init({
    id_pedido: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    codigo: {
      type: DataTypes.STRING(45)
    },
    fecha_inicio: DataTypes.DATE,
    fecha_fin: DataTypes.DATE,
    estado: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    id_cliente: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    id_turno: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    id_servicio: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    id_puesto: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    id_pedidopadre: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    id_caja: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    valor: {
      type: DataTypes.DECIMAL(15,2),
      defaultValue: 0.00
    },
    descuentos: {
      type: DataTypes.DECIMAL(15,2),
      defaultValue: 0.00
    },
    total: {
      type: DataTypes.DECIMAL(15,2),
      defaultValue: 0.00
    },
    padre: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    impuestos: {
      type: DataTypes.DECIMAL(15,2),
      defaultValue: 0.00
    }
  }, {
    sequelize,
    modelName: 'Soul_pedidos',
    tableName: 'soul_pedidos',
    timestamps: false
  });
  return Soul_pedidos;
};