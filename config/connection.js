if (process.env.NODE_ENV != "production") {
  require("dotenv").config()
}

const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  process.env.JAWSDB_URL
  
  {
    host: "localhost",
    dialect: "mysql",
  }
);

module.exports = sequelize;
