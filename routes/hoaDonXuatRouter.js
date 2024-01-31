const express = require('express');

const HoaDonXuatController = require('../controllers/hoaDonXuatController');

const router = express.Router();

router.get('/sellView', HoaDonXuatController.sellView);
router.get('/getAll', HoaDonXuatController.getAll);
router.get('/getDetails/:productId', HoaDonXuatController.getDetails);

module.exports = router;