const express = require('express');

const UserController = require('../controllers/userController');

const router = express.Router();

router.get('/', UserController.getAll)
router.get('/view', UserController.view)

module.exports = router