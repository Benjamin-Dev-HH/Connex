const mysql = require("mysql2");
require("dotenv").config();

// Create a connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",  
  user: process.env.DB_USER || "root",       
  password: process.env.DB_PASS || "",      
  database: process.env.DB_NAME || "connex-db",
  port: process.env.DB_PORT || 3306,        
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Test the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database connection failed:", err.message);
  } else {
    console.log("✅ Connected to MySQL database:", process.env.DB_NAME);
    connection.release();
  }
});

module.exports = pool.promise();
