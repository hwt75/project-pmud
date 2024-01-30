const express = require('express');

const AdminController = require('../controllers/adminController');

const router = express.Router();

router.get(('/login'), AdminController.adminLogin);

module.exports = router;