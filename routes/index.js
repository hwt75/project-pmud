const express = require('express');
const UserRouter = require('./userRouter')
const ProductRouter = require('./productRouter');

const router = express.Router();

router.use('/user', UserRouter);
router.use('/product', ProductRouter);

module.exports  = router;