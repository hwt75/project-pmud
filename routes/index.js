const express = require('express');
const UserRouter = require('./userRouter')
const ProductRouter = require('./productRouter');
const AdminRouter = require('./adminRouter');
const HoaDonXuatRouter = require('./hoaDonXuatRouter');
// const HoaDonNhapRouter = require('./hoaDonNhapRouter');

const router = express.Router();

router.use('/admin', AdminRouter);

router.use('/hoadonxuat', HoaDonXuatRouter);

// router.use('/hoadonnhap', HoaDonNhapRouter);

router.use('/product', ProductRouter);

router.use('/user', UserRouter);

router.get('/error',(req,res)=>{
    res.render('errorPage')
})

module.exports  = router;