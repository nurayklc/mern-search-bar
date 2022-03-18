const express = require('express');
const router = express.Router();

const studentController = require('../controller/student')

// Request endpoint: localhost/api/student/:id
router.get('/student', studentController.getAllStudent)

module.exports = router;