const express = require('express');

const HoaDonNhapController = require('../controllers/hoaDonNhapController');

const router = express.Router();

router.get('/receiveView', HoaDonNhapController.receiveView);

module.exports = router;