const multer = require('multer');
const path = require('path');
const jwt = require('jsonwebtoken');

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Files will be stored in the "uploads" folder
  },
  
  filename: (req, file, cb) => {
    // Generate the file path and store it in req.resumePath
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded.email; // Assuming the token contains the `email` field
    const uniqueFilename = `${email}-${Date.now()}-${file.originalname}`;
    req.resumePath = uniqueFilename; // Save it in the request object
    cb(null, uniqueFilename); // Pass the generated filename to multer
  }, 
});  

// File filter to ensure only PDFs are uploaded
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Only PDF files are allowed!'), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
