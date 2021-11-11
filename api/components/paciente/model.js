const { DataTypes } = require("sequelize");
const dbConfig = require("../../../config").db;
const sequelize = require("../../../db")(dbConfig);
const bcrypt = require("bcrypt");

const Paciente = sequelize.define("Paciente", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
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
  fechaNacimiento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  nacionalidad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Paciente.beforeCreate((paciente, options) => {
  return bcrypt
    .hash(paciente.password, 10)
    .then((hash) => {
      paciente.password = hash;
    })
    .catch((err) => {
      throw new Error("Error at hashing password: " + err);
    });
});

module.exports = Paciente;
