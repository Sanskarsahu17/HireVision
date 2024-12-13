const express = require('express');
const authenticateJWT = require('../middleware/authenticateJWT')
// const {getCandidate} = require('../controllers/getCandidate.js');

const router = express.Router();

router.get('/HR-info',authenticateJWT,getHR);
router.post('job-posting',authenticateJWT,createJob);
router.get('candidateApplied',authenticateJWT,getCandidate);
router.post('checkEligibility',authenticateJWT,checkEligibility);

module.exports = router;