const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("databaseName", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",

  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 1000,
  },
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log("Unable to connect to database:", err);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sequelize.sync({ force: false }).then(() => {
  console.log("Synced done");
});

module.exports = db;
