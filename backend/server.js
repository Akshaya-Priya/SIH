const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'constitution_db'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

// API endpoint to get questions by topic
app.get('/api/questions/:topic', (req, res) => {
  const topic = req.params.topic;
  const query = 'SELECT * FROM questions WHERE topic = ?';

  db.query(query, [topic], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Fetch all map questions
app.get('/api/map_questions', (req, res) => {
  const query = 'SELECT * FROM map_questions ORDER BY RAND() LIMIT 3';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error fetching questions from database' });
    } else {
      console.log(results);
      res.json(results);
    }
  });
});

// Get simplified duties
app.get('/api/simplified-duties', (req, res) => {
  const query = 'SELECT * FROM simplified_duties';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Get original duties
app.get('/api/original-duties', (req, res) => {
  const query = 'SELECT * FROM original_duties';
  db.query(query, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
