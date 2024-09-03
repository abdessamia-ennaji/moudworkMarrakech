const authMiddleware = (req, res, next) => {
    if (req.session.userId) {
      return next(); 
    } else {
      return res.status(401).json({ message: 'Unauthorized access. Please log in first.' });
    }
  };
  
  module.exports = authMiddleware;