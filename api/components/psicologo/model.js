const { DataTypes } = require("sequelize");
const dbConfig = require("../../../config").db;
const sequelize = require("../../../db")(dbConfig);
const bcrypt = require("bcrypt");

const Psicologo = sequelize.define("Psicologo", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true,
    validate: {
      len: {
        args: [2, 32],
        msg: "Username length must be between 2 and 32 characters",
      },
    },
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [2, 32],
        msg: "Name length must be between 2 and 32 characters",
      },
    },
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [2, 32],
        msg: "Name length must be between 2 and 32 characters",
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [8, 16],
    },
  },
  nroTelefono: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nacionalidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  especialidades: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nroCedula: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Psicologo.beforeCreate((psicologo, options) => {
  return bcrypt
    .hash(psicologo.password, 10)
    .then((hash) => {
      psicologo.password = hash;
    })
    .catch((err) => {
      throw new Error("Error at hashing password: " + err);
    });
});

module.exports = Psicologo;
