const express=require('express');
const productRouter=require('./routes/product.js');
const userRouter=require('./routes/user.js');
const bodyParser=require('body-Parser');
const cors=require('cors');
const session = require("express-session")

var app=express();

app.listen(3000);
app.use(bodyParser.urlencoded({
  extended:false 
	//不使用扩展的模块，而是使用nodejs提供的querystring模块解析为对象
}));

//注册session
app.use(session({
	secret:"128位随机字符",
	resave:false,
	saveUninitialized:true,
}))

app.use(express.static('public'));
app.use(cors({
  origin:"http://127.0.0.1:5500"
}))
app.use('/product',productRouter);
app.use('/user',userRouter);



