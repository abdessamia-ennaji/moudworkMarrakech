const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const db = require('../models/db');

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// Create a news article
router.post('/', upload.single('image'), (req, res) => {
  const { title, content, quote, news_date, quote_source, additional_content } = req.body; // Ensure correct field names
  const imageUrl = req.file ? req.file.path : null;

  const sql = 'INSERT INTO news (title, content, quote, quote_source, additional_content, news_date, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)';
  db.query(sql, [title, content, quote,quote_source, additional_content, news_date, imageUrl], (err, result) => {
    if (err) {
      console.error('Error inserting news:', err);
      res.status(500).send('Error inserting news');
    } else {
      res.status(201).send('News article created');
    }
  });
});

// Get all news articles
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM news ORDER BY created_at DESC';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching news:', err);
      res.status(500).send('Error fetching news');
    } else {
      res.json(results);
    }
  });
});

// Update a news article
router.put('/:id', upload.single('image'), (req, res) => {
  const { id } = req.params;
  const { title, content, quote, news_date, quote_source, additional_content} = req.body;
  const imageUrl = req.file ? req.file.path : null;

  const sql = 'UPDATE news SET title = ?, content = ?, quote = ?,quote_source = ?,additional_content = ?, news_date = ?, image_url = ? WHERE id = ?';
  db.query(sql, [title, content, quote, quote_source, additional_content, news_date, imageUrl, id], (err, result) => {
    if (err) {
      console.error('Error updating news:', err);
      res.status(500).send('Error updating news');
    } else {
      res.status(200).send('News article updated');
    }
  });
});

// Delete a news article
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM news WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error deleting news:', err);
      res.status(500).send('Error deleting news');
    } else {
      res.status(200).send('News article deleted');
    }
  });
});




///latest news
router.get('/latest', (req, res) => {
    const sql = 'SELECT * FROM news ORDER BY news_date DESC LIMIT 1';
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching latest news:', err);
        res.status(500).send('Error fetching latest news');
      } else {
        res.json(results);
      }
    });
  });

router.get('/latestthree', (req, res) => {
    const sql = 'SELECT * FROM news ORDER BY news_date DESC LIMIT 3';
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching latest news:', err);
        res.status(500).send('Error fetching latest news');
      } else {
        res.json(results);
      }
    });
  });



module.exports = router;
