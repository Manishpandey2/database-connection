const dbConfig = {
  databaseName: process.env.DB_NAME,
  userName: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
};

module.exports = dbConfig;
