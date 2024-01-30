const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const connection = require('./config/database');
// const session = require('express-session');

// Khai bao thư viện express 
const app = express();

// khai báo địa chỉ truy cập cho project 
const port = 3000 ;
const host = 'localhost';

// Chạy thư viện express đã khai báo thông qua biến app: 

// set up đia chỉ truy cấp cho project 
app.set('port', port);
app.set('host', host);

// set up tính năng đọc file ejs
app.set('views', './view')
app.set('view engine', 'ejs');
app.use(express.static('public'))

// set up session
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: true,
//     saveUninitialized: true,
// }));

// set up tính năng đọc file json 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));

// set up router 

app.use('/',router);

// home page
app.get('/', (req, res) => {
    res.render('index');
});

// const userController = require('./controllers/userController');
// app.get('/viewUser', userController.viewUser);
// app.get('/signUp', userController.signUp)

// phần này để test xem chạy đc hay ko 

app.listen(app.get('port'), app.get('host'),()=>{
    console.log(`Server is running at http://${host}:${port}`);
    })


// Note: project này sẽ dùng thư viện knex để kết nối db mysql nên sẽ cài thư viện là knex