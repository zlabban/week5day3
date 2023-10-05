// Import the pg package
import pg from "pg";

// Get the connection string using an environment variable
const connectionString = process.env.DB_CONNECTION_STRING;

// Create a new pool instance
const pool = new pg.Pool({
  connectionString,
});

// Send a query "SELECT * FROM books"
// const data = await pool.query("CREATE TABLE authors ( id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, first_name VARCHAR (255) NOT NULL, last_name VARCHAR (255) NOT NULL)");
// const rows = data.rows;
// console.log(rows);

const data = await pool.query(
  "CREATE TABLE books (id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,title VARCHAR(255) NOT NULL,published_date DATE)"
);
const rows = data.rows;
console.log(rows);

// Close the connection
await pool.end();
