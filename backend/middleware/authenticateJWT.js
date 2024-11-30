const jwt = require('jsonwebtoken');

// Middleware to extract and decode JWT
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'Authorization header missing' });
  }

  const token = authHeader.split(' ')[1]; // Bearer <token>

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid or expired token' });
    }

    req.user = decoded; // Attach user info (name, email) to request object
    console.log(req.user);
    next();
  });
};

module.exports = authenticateJWT;
