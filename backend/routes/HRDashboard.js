const express = require('express');
const authenticateJWT = require('../middleware/authenticateJWT')
const {getHR,getCandidate,createJob,checkEligibility} = require('../controllers/hrActions')
// const {getCandidate} = require('../controllers/getCandidate.js');

const router = express.Router();

router.get('/HR-info',getHR);
router.post('/job-posting',createJob);
router.get('/candidateApplied',getCandidate);
router.post('/checkEligibility',checkEligibility);

module.exports = router;