require("dotenv").config(); //? do i need this in config()?

const Sequelize = require("sequelize");

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      port: 3306,
      dialect: "mysql",
      dialectOptions: {
        decimalNumbers: true,
      },
    }
  );
}

module.exports = sequelize;
