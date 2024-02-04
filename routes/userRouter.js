const express = require('express');

const UserController = require('../controllers/userController');

const router = express.Router();

// giao diện
router.get('/user', UserController.getAll)
router.get('/viewUser', UserController.viewUser)
router.get('/signUp', UserController.signUp)
router.get('/signIn', UserController.signIn)

// put bằng get 
router.get('/editUser/:id', UserController.editUser)
router.get('/delete/:id', UserController.deleteById)


router.get('/getByPhoneNumber/:phoneNumber', UserController.getByPhoneNumber)
router.get('/getByName/:name', UserController.getByName)
router.get('/getById/:id', UserController.getById)

router.delete('/delete/:phoneNumber', UserController.deleteByPhoneNumber)
router.delete('/delete/:name', UserController.deleteByName)

// thêm mới 
router.post('/post', UserController.postNewUser)

// update (put) bằng phương thức post 
router.post('/update', UserController.update)

// update bằng put
router.put('/edit/:phoneNumber', UserController.updateUser)

module.exports = router;