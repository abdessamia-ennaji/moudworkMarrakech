require('dotenv').config(); // Load environment variables from .env file
const mysql = require('mysql2');

// Create a connection pool for better connection management
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
  waitForConnections: true,
  connectionLimit: 10, // Number of connections in the pool
  queueLimit: 0 // Unlimited queueing of connection requests
});

// Test the connection pool
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
  connection.release(); // Release the connection back to the pool
});

// Export the pool with promise support for async/await usage
module.exports = pool.promise();
