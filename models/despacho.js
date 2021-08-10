'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Despacho extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Soul_usuarios }) {
      // define association here
      // this.belongsTo(Soul_usuarios, { foreignKey: 'usuarioId', as: 'soul_usuario' })
    }

    toJSON() {
      return { ...this.get(), id: undefined }
    }
  };
  Despacho.init({
    id_despacho: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    Nombre: {
      type: DataTypes.STRING,
    },
    Descripcion: {
      type: DataTypes.STRING,
    },
    Codigo: {
      type: DataTypes.STRING,
    }
  }, {
    sequelize,
    tableName: 'soul_xxx_despachos',
    modelName: 'Despacho',
    underscored: true,
    timestamps: false
  });
  return Despacho;
};