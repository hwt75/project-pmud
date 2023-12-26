const express = require('express');

const UserController = require('../controllers/userController');

const router = express.Router();

router.get('/', UserController.getAll)
router.get('/view', UserController.view)

router.get('/getuser', UserController.getById)
router.get('/:name', UserController.getByName)

router.delete('/:id', UserController.deleteById)
router.delete('/:name', UserController.deleteByName)

module.exports = router