const { Pool } = require("pg"); //needed to make a connection to the database
const ENV = process.env.NODE_ENV || "development";


require("dotenv").config({
  //using the dotenv library go and loook at this file with this path and read the key (all keys but PGDATABASE for example) value pairs in there so that
  path: `${__dirname}/../.env.${ENV}`,
});

if (!process.env.PGDATABASE) {
  throw new Error("PGDATABASE not set");
}

module.exports = new Pool(); //this is a class and we are making a new instance of it to create a connection to the database
