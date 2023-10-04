// Import the pg package
import pg from "pg";

// Get the connection string using an environment variable
const connectionString = process.env.DB_CONNECTION_STRING;

// Create a new pool instance
const pool = new pg.Pool({
  connectionString,
});

// Send a query "SELECT * FROM books"
const data = await pool.query(
  "CREATE TABLE movies (id INTEGER PRIMARY KEY,title TEXT,director TEXT,year INTEGER,length_minutes INTEGER);"
);
const rows = data.rows;
console.log(rows);

// Close the connection
await pool.end();
