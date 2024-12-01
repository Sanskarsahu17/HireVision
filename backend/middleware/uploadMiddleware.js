const multer = require('multer');
const path = require('path');

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Files will be stored in the "uploads" folder
  },
  filename: (req, file, cb) => {
    // Generate the file path and store it in req.resumePath
    const uniqueFilename = `${req.body.email}-${Date.now()}-${file.originalname}`;
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
