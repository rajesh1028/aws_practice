const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("blog", "admin", "masai123", {
  host: "database-1.c6pqvulusqr8.ap-southeast-2.rds.amazonaws.com",
  dialect: "mysql",
});

module.exports = { sequelize };
