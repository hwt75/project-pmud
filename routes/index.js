const express = require('express');
const UserRouter = require('./userRouter')

const router = express.Router();

router.use('/user', UserRouter);
module.exports  = router;