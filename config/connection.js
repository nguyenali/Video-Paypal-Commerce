if (process.env.NODE_ENV != "production") {
  require("dotenv").config()
}

const Sequelize = require("sequelize");

const sequelize = new Sequelize(

  if(process.env.JAWSDB_URL) {
    connection =mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection =mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'alithanhhuynguyen'
      database: 'stock_inventory_db'
    })
  }
);

module.exports = sequelize;
