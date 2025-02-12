const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.post('/', controller.user)
router.get('/', controller.user)


module.exports = router;
