const express = require('express');
const {getCandidate,getJobs} = require('../controllers/getCandidate.js');

const router = express.Router();

router.get('/candidate',getCandidate);
router.get('/getJobs',getJobs);

module.exports = router;