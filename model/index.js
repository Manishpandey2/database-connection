require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const dbConfig = require("../config/dbConfig");
const userModel = require("./userModel.js");

const { databaseName, userName, password, host } = dbConfig;
console.log(process.env);
const sequelize = new Sequelize(databaseName, userName, password, {
  host,
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
db.blog = require("./blogModel.js")(sequelize, DataTypes);
db.user = require("./userModel")(sequelize, DataTypes);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Synced done");
});

module.exports = db;
