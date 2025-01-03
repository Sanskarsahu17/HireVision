const  express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const connectDB = require('./config/db');
const authenticationRoutes = require('./routes/authenticationRoutes')
const appliedjob = require('./routes/appliedJob');
const assesmentRoutes = require('./routes/AssessmentRoutes');
const  getCandidate = require('./routes/getDetails');
const HRDashboard = require('./routes/HRDashboard');


const app = express();
connectDB();
app.use(cors(({
    origin: 'http://localhost:5173', // Frontend URL
    credentials: true,              // Allow credentials (cookies)
  })));
app.use(express.json());
app.use(cookieParser()); // Use cookie-parser middleware
require('dotenv').config();

// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api/authentication', authenticationRoutes);
app.use('/api/jobApplication',appliedjob);
app.use('/api/assessment',assesmentRoutes);
app.use('/api/dashboard',getCandidate);
app.use('/api/hr-dashboard',HRDashboard);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

