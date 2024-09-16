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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
