if (process.env.NODE_ENV != "production") {
  require("dotenv").config()
}

const Sequelize = require("sequelize");

const sequelize = new Sequelize( 'database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
