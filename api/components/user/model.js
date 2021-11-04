const { DataTypes } = require("sequelize");
const dbConfig = require("../../../config").db;
const sequelize = require("../../../db")(dbConfig);
const bcrypt = require("bcrypt");

const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    unique: true,
    validate: {
      len: {
        args: [2, 32],
        msg: "Userame length must be between 2 and 32 characters",
      },
    },
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [2, 32],
        msg: "Name length must be between 2 and 32 characters",
      },
    },
  },
  lastname: {
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
  telephone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  country: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

User.beforeCreate((user, options) => {
  return bcrypt
    .hash(user.password, 10)
    .then((hash) => {
      user.password = hash;
    })
    .catch((err) => {
      throw new Error("Error at hashing password: " + err);
    });
});

module.exports = User;
