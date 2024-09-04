require('dotenv').config();

const bcrypt = require('bcrypt');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const NewsRoutes = require('./routes/NewsRoutes');
const ProjectsRoutes = require('./routes/ProjectsNews');
const Analytics = require('./routes/Analytic');///
const db = require('./models/db')
const app = express();
const path = require('path');
const session = require('express-session');
const authMiddleware = require('./middleware/authMiddleware');


app.use(session({
  secret: process.env.SESSION_SECRET, // secret key
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true } // Set secure: true if using HTTPS
}));


app.use(cors(
  {
    origin: 'https://moudwork.netlify.app/', // You can also specify your frontend URL here
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }
));
app.use(bodyParser.json());

app.use('/admindashboard', authMiddleware);

app.use('/api/news', NewsRoutes);
app.use('/api/projects', ProjectsRoutes);
app.use('/api/analytic', Analytics);

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



//// projects pictures
// 750 x 600


//////////////
// Update the /login route to hash the password before comparing
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const sql = 'SELECT * FROM users WHERE username = ?';
  db.query(sql, [username], (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'An error occurred while processing your request.' });
    }
    
    if (result.length > 0) {
      const user = result[0];
      bcrypt.compare(password, user.password, (err, passwordMatch) => {
        if (passwordMatch) {
          req.session.userId = user.id; // Store the user ID in the session
          req.session.isAdmin = user.isAdmin; // Store admin status if applicable
          return res.status(200).json({ message: 'Login successful' });
        } else {
          return res.status(401).json({ message: 'Login failed. Invalid username or password.' });
        }
      });
    } else {
      return res.status(401).json({ message: 'Login failed. Invalid username or password.' });
    }
  });
});

app.post('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Logout failed' });
    } else {
      res.status(200).json({ message: 'Logout successful' });
    }
  });
});


// Update the /register route to hash the password before storing
app.post('/register', (req, res) => {
  const { username, password } = req.body;

  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      res.status(500).json({ message: 'Error hashing password.' });
    } else {
      const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
      db.query(sql, [username, hashedPassword], (err, result) => {
        if (err) {
          console.error('Error inserting user:', err);
          res.status(500).send('Failed to register user');
        } else {
          res.send('User registered successfully');
        }
      });
    }
  });
});



app.post('/submitcontact', (req, res) => {
  const { name, email, subject, message } = req.body;

  const sql = 'INSERT INTO contact_form (name, email, subject, message) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Failed to submit form');
    } else {
      res.send('Form submitted successfully');
    }
  });
});


app.get('/contactmsg', (req, res) => {
  const sql = 'SELECT * FROM contact_form ORDER BY submitted_at DESC';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching messages:', err);
      res.status(500).send('Error fetching messages');
    } else {
      res.json(results);
    }
  });
});

app.delete('/contactmsg/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM contact_form WHERE id = ?', [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error removing message' });
    }
    res.status(200).json({ message: 'Message removed successfully' });
  });
});


app.get('/messages/count', (req, res) => {
  const sql = 'SELECT COUNT(*) AS total_messages FROM contact_form';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching message count:', err);
      res.status(500).send('Error fetching message count');
    } else {
      res.json(result[0]);
    }
  });
});





/// comments 

app.post('/api/news/:newsId/comments', (req, res) => {
  const { newsId } = req.params;
  const { author, content } = req.body;
  
  // Insert the comment into the comments table with the associated news_id
  const query = 'INSERT INTO comments (news_id, author, content) VALUES (?, ?, ?)';
  db.query(query, [newsId, author, content], (err, result) => {
      if (err) {
          return res.status(500).send('Server error');
      }
      res.status(201).send('Comment added successfully');
  });
});

app.get('/api/news/:newsId/comments', (req, res) => {
const { newsId } = req.params;

// Retrieve comments associated with the given news_id
const query = 'SELECT * FROM comments WHERE news_id = ? ORDER BY comment_date DESC';
db.query(query, [newsId], (err, results) => {
    if (err) {
        return res.status(500).send('Server error');
    }
    res.json(results);
});
});




const PORT = process.env.MYSQL_PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/////