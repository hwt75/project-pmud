const express = require('express');

const UserController = require('../controllers/userController');

const router = express.Router();

router.get('/user', UserController.getAll)
router.get('/viewUser', UserController.viewUser)
router.get('/signUp', UserController.signUp)
router.get('/editUser/:id', UserController.editUser)

router.get('/getByPhoneNumber/:phoneNumber', UserController.getByPhoneNumber)
router.get('/getByName/:name', UserController.getByName)
router.get('/getById/:id', UserController.getById)
router.delete('/delete/:phoneNumber', UserController.deleteByPhoneNumber)
router.delete('/delete/:name', UserController.deleteByName)

router.post('/post', UserController.postNewUser)

router.put('/edit/:phoneNumber', UserController.updateUser)

module.exports = router