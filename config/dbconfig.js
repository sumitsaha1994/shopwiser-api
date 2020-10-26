const sequelize = require("sequelize");
console.log(process.env.SQL_DB_KEY);
const shopwiserDB = new sequelize(process.env.SQL_DB_KEY);

shopwiserDB
    .authenticate()
    .then(() => {
        console.log("Postgresql db connection successful");
    })
    .catch((err) => {
        console.log("Postgresql db connection failed", err);
    });

module.exports = shopwiserDB;
