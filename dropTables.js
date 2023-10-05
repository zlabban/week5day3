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
  "DROP TABLE authors, books, author_book"
);
const rows = data.rows;
console.log(rows);

// Close the connection
await pool.end();