const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const db = require('../models/db'); // Ensure this is a promise-based connection (like db.promise())

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
router.post('/', upload.single('image'), async (req, res) => {
  const { title, content, quote, news_date, quote_source, additional_content } = req.body;
  const imageUrl = req.file ? req.file.path : null;

  const sql = 'INSERT INTO news (title, content, quote, quote_source, additional_content, news_date, image_url) VALUES (?, ?, ?, ?, ?, ?, ?)';
  try {
    await db.query(sql, [title, content, quote, quote_source, additional_content, news_date, imageUrl]);
    res.status(201).send('News article created');
  } catch (err) {
    console.error('Error inserting news:', err);
    res.status(500).send('Error inserting news');
  }
});

// Get all news articles
router.get('/', async (req, res) => {
  const sql = 'SELECT * FROM news ORDER BY created_at DESC';
  try {
    const [results] = await db.query(sql);
    res.json(results);
  } catch (err) {
    console.error('Error fetching news:', err);
    res.status(500).send('Error fetching news');
  }
});

// Update a news article
router.put('/:id', upload.single('image'), async (req, res) => {
  const { id } = req.params;
  const { title, content, quote, news_date, quote_source, additional_content } = req.body;
  const imageUrl = req.file ? req.file.path : null;

  const sql = 'UPDATE news SET title = ?, content = ?, quote = ?, quote_source = ?, additional_content = ?, news_date = ?, image_url = ? WHERE id = ?';
  try {
    await db.query(sql, [title, content, quote, quote_source, additional_content, news_date, imageUrl, id]);
    res.status(200).send('News article updated');
  } catch (err) {
    console.error('Error updating news:', err);
    res.status(500).send('Error updating news');
  }
});

// Delete a news article
router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM news WHERE id = ?';
  try {
    await db.query(sql, [id]);
    res.status(200).send('News article deleted');
  } catch (err) {
    console.error('Error deleting news:', err);
    res.status(500).send('Error deleting news');
  }
});

// Get the latest news article
router.get('/latest', async (req, res) => {
  const sql = 'SELECT * FROM news ORDER BY news_date DESC LIMIT 1';
  try {
    const [results] = await db.query(sql);
    res.json(results);
  } catch (err) {
    console.error('Error fetching latest news:', err);
    res.status(500).send('Error fetching latest news');
  }
});

// Get the latest three news articles
router.get('/latestthree', async (req, res) => {
  const sql = 'SELECT * FROM news ORDER BY news_date DESC LIMIT 3';
  try {
    const [results] = await db.query(sql);
    res.json(results);
  } catch (err) {
    console.error('Error fetching latest news:', err);
    res.status(500).send('Error fetching latest news');
  }
});

module.exports = router;
