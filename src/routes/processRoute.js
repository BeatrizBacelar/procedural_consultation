const express = require('express');
const router = express.Router();
const controller = require('../controllers/processController')

router.post('/get_process', controller.post)
router.get('/get_courts', controller.get)

module.exports = router;