const multer = require('multer');
const multerS3 = require('multer-s3');
const {S3Client} = require('@aws-sdk/client-s3');
const jwt = require('jsonwebtoken');

const s3 = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
  });


  // Configure multer storage
const storage = multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: 'private', // or 'public-read' if needed
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      try {
        const token = req.cookies.token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const email = decoded.email; // Assuming your JWT contains email
        
        const uniqueFilename = `resumes/${email}-${Date.now()}-${file.originalname}`;
        req.resumePath = uniqueFilename; // Saving path in request object
        cb(null, uniqueFilename);
      } catch (err) {
        cb(err);
      }
    },
  });

  // File filter to allow only PDFs
const fileFilter = (req, file, cb) => {
    if (file.mimetype === 'application/pdf') {
      cb(null, true);
    } else {
      cb(new Error('Only PDF files are allowed!'), false);
    }
  };

// Export the multer upload middleware
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
  });

  module.exports = upload;