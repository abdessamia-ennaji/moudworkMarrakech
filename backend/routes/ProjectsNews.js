const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const db = require('../models/db');
const sharp = require('sharp');
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

// Create a projects 
router.post('/', upload.single('image'), async (req, res) => {
  const { title, content } = req.body;
  let imageUrl = null;

  if (req.file) {
    const imagePath = req.file.path;
    const resizedImagePath = path.join('uploads', 'resized_' + req.file.filename);

    try {
      // Resize the image to 750x600 pixels
      await sharp(imagePath)
        .resize(750, 600)
        .toFile(resizedImagePath);

      // Update the imageUrl to point to the resized image
      imageUrl = resizedImagePath;

      // Optionally, delete the original file after resizing
      // fs.unlinkSync(imagePath);

    } catch (err) {
      console.error('Error processing image:', err);
      return res.status(500).send('Error processing image.');
    }
  }

  const sql = 'INSERT INTO projects (title, content, image_url) VALUES (?, ?, ?)';
  db.query(sql, [title, content, imageUrl], (err, result) => {
    if (err) {
      console.error('Error inserting project:', err);
      res.status(500).send('Error inserting project');
    } else {
      res.status(201).send('Project article created');
    }
  });
});

// Get all projects articles
router.get('/', (req, res) => {
  const sql = 'SELECT * FROM projects ORDER BY created_at DESC';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching projects:', err);
      res.status(500).send('Error fetching projects');
    } else {
      res.json(results);
    }
  });
});

// Update a projects article
router.put('/:id', upload.single('image'), async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  let imageUrl = null;

  if (req.file) {
    const imagePath = req.file.path;
    const resizedImagePath = path.join('uploads', 'resized_' + req.file.filename);

    try {
      // Resize the image to 750x600 pixels
      await sharp(imagePath)
        .resize(750, 600)
        .toFile(resizedImagePath);

      // Update the imageUrl to point to the resized image
      imageUrl = resizedImagePath;

      // Optionally, delete the original file after resizing
      // fs.unlinkSync(imagePath);

    } catch (err) {
      console.error('Error processing image:', err);
      return res.status(500).send('Error processing image.');
    }
  }

  const sql = 'UPDATE projects SET title = ?, content = ?, image_url = ? WHERE id = ?';
  db.query(sql, [title, content, imageUrl, id], (err, result) => {
    if (err) {
      console.error('Error updating project:', err);
      res.status(500).send('Error updating project');
    } else {
      res.status(200).send('Project article updated');
    }
  });
});

// Delete a projects article
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const sql = 'DELETE FROM projects WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error('Error deleting projects:', err);
      res.status(500).send('Error deleting projects');
    } else {
      res.status(200).send('projects article deleted');
    }
  });
});




///latest projects
router.get('/latest', (req, res) => {
    const sql = 'SELECT * FROM projects ORDER BY id DESC LIMIT 1';
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching latest projects:', err);
        res.status(500).send('Error fetching latest projects');
      } else {
        res.json(results);
      }
    });
  });

router.get('/latestthree', (req, res) => {
    const sql = 'SELECT * FROM projects ORDER BY created_at DESC LIMIT 6';
    db.query(sql, (err, results) => {
      if (err) {
        console.error('Error fetching latest projects:', err);
        res.status(500).send('Error fetching latest projects');
      } else {
        res.json(results);
      }
    });
  });

module.exports = router;
