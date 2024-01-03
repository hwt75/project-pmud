const express = require('express');

const UserController = require('../controllers/userController');

const router = express.Router();

router.get('/user', UserController.getAll)
router.get('/view', UserController.view)

router.get('/get', UserController.getById)
router.get('/:name', UserController.getByName)

router.delete('/:id', UserController.deleteById)
router.delete('/:name', UserController.deleteByName)

router.post('/post', UserController.postNewUser)

module.exports = router