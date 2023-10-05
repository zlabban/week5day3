// Import the pg package
import pg from "pg";

// Get the connection string using an environment variable
const connectionString = process.env.DB_CONNECTION_STRING;

// Create a new pool instance
const pool = new pg.Pool({
  connectionString,
});

// Send a query "SELECT * FROM books"
// const data = await pool.query("INSERT INTO authors (first_name , last_name) VALUES ('George',	'Orwell'),('J.K.', 'Rowling'),('J.R.R.','Tolkien'),('Agatha', 'Christie'),('Stephen',	'King'),('Neil','Gaiman')");
// const rows = data.rows;
// console.log(rows);

const data = await pool.query(
  "INSERT INTO books (title, published_date) VALUES ('1984',	'1949-06-08'), ('Harry Potter and the Philosopher`s Stone', '1997-06-26'), ('The Fellowship of the Ring',	'1954-07-29'), ('The Two Towers',	'1954-11-11'), ('The Return of the King',	'1955-10-20'), ('And Then There Were None',	'1939-11-06'), ('The Shining','1977-01-28'), ('It','1986-09-15'), ('Good Omens','1990-05-01'), ('Animal Farm','1945-08-17')"
);
const rows = data.rows;
console.log(rows);

// Close the connection
await pool.end();
