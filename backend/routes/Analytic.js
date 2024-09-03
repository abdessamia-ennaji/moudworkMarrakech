const express = require('express');
const router = express.Router();
const db = require('../models/db');




router.post('/track-visit', (req, res) => {
    const ip = req.ip;
    const userAgent = req.headers['user-agent'];
    
    db.query('INSERT INTO page_visits (ip_address, user_agent) VALUES (?, ?)', [ip, userAgent], (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json({ message: 'Visit tracked' });
    });
});

router.get('/get-visits', (req, res) => {
    db.query('SELECT * FROM page_visits', (error, results) => {
        if (error) {
            return res.status(500).json({ error: 'Database error' });
        }
        res.status(200).json(results);
    });
});


module.exports = router;