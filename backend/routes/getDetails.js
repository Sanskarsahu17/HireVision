const express = require('express');
const {getCandidate,getJobs,getInterviewList} = require('../controllers/getCandidate.js');

const router = express.Router();

router.get('/candidate',getCandidate);
router.get('/getJobs',getJobs);
router.get('/getInterviewList',getInterviewList);

module.exports = router;