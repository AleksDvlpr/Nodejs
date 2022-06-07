require('dotenv').config();

/*
 * Settings for migrations
 * */
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DRIVER,
    define: {
      // определение глобальных хуков
      hooks: {
        beforeFind() {
          console.log('Global hook');
        },
      },
    },
  },
};
