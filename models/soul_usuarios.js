'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Soul_usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Despacho }) {
      // this.hasMany(Despacho, { foreignKey: 'usuarioId', as: 'despachos' })
    }

    toJSON() {
      return { ...this.get(), id: undefined, password: null }
    }

  };
  Soul_usuarios.init({
    id_usuario: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
      field: "id_usuario"
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: 'Username es necesario' },
        notEmpty: { msg: 'Username no puede estar vacio' }
      }
    },
    password: {
      type: DataTypes.STRING,

    },
    permiso_general: {
      type: DataTypes.INTEGER,
    },
    cargo: {
      type: DataTypes.STRING,
    },
    nombres: {
      type: DataTypes.STRING,

    },
    clave: {
      type: DataTypes.STRING,

    },
    despachos: {
      type: DataTypes.INTEGER,
    },
    administracion: {
      type: DataTypes.INTEGER,
    },
    carta: {
      type: DataTypes.INTEGER,
    },

    estado: {
      type: DataTypes.INTEGER
    },
    correo: {
      type: DataTypes.STRING(126).BINARY,
      unique: true,
      allowNull: false,
      validate: {
        notNull: { msg: 'email es necesario' },
        notEmpty: { msg: 'email no puede estar vacio' },
        isEmail: { msg: 'Debe ser un correo valido' }
      }
    },
    role: {

      type: DataTypes.ENUM('DESPACHO', 'ADMINISTRACION', 'CARTA')

    },
    fecha_estado: {
      type: DataTypes.DATEONLY
    },
    tipo: {
      type: DataTypes.INTEGER
    }

  }, {
    sequelize,
    modelName: 'Soul_usuarios',
    tableName: 'soul_usuarios',
    timestamps: false
  });
  return Soul_usuarios;
};