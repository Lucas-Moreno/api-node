const mysql = require("mysql2")
const dbConfig = require("./src/config/db.config.js")

// Create a connection to the database
const pool = mysql.createPool({
  port: dbConfig.PORT,
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
})

// query dynamic
pool.simpleQuery = async (query, arrayValue) => {
  const [rows, fields] = await pool.promise().query(query, arrayValue)
  if (rows && fields) {
    return rows
  } else {
    return rows
  }
}

module.exports = pool 
