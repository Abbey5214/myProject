const pool=require('../pool.js');
const express = require("express");
const router = express.Router();

//注册 
router.get("/register",(req,res)=>{
	console.log(req.query)
	var obj = req.query;
	//获取电话号，判断是否符合要求
	var $phone=obj.phone;
	if(!$phone){
		res.send({code:401,msg:'请检查电话号码是否正确'});
		return;
	  }
	var $upwd=obj.upwd;
	if(!$upwd){
		res.send({code:402,msg:'请检查密码是否正确'});
		return;
	  }
	//验证通过，将用户的数据插入到数据表
	pool.query('INSERT INTO flower_user VALUES(NULL,?,?)',[$phone,$upwd],(err,result)=>{
		if(err) throw err;
		//如果affectedRows属性大于0，数据插入成功
		if(result.affectedRows>0){
		  res.send({code:1,msg:"注册成功"});
		}else{
			res.send({code:-1,msg:"注册失败"})
		}
	});
})



//注册页电话号是否已被占用
router.get("/registerphone",(req,res)=>{
	//console.log(req.query)
	var phone = req.query.phone;
	pool.query('SELECT uid FROM  flower_user WHERE phone=?',[phone],(err,result)=>{
		console.log(result);
		if(err) throw err;
		//如果affectedRows属性大于0，数据插入成功
		if(result.length>0){
		  res.send({code:-1,msg:"电话号已被注册"});
		}
	})
})

//登录 
router.get("/login",(req,res)=>{
	console.log(req.query)
	var obj = req.query;
	//获取电话号，判断是否符合要求
	var phone=obj.phone;
	if(!phone){
		res.send({code:401,msg:'请检查电话号码是否正确'});
		return;
	  }
	var upwd=obj.upwd;
	if(!upwd){
		res.send({code:402,msg:'请检查密码是否正确'});
		return;
	  }
	//验证通过，查询用户表
	var sql='SELECT * FROM  flower_user WHERE phone=? AND upwd=?';
	pool.query(sql,[phone,upwd],(err,result)=>{
		if(err) throw err;
		//如果affectedRows属性大于0，数据插入成功
		if(result.length<1){
			res.send({code:-1,msg:"登录失败"}) 
		}else{
			res.send({code:1,msg:"登录成功",data:result[0]});
			req.session.uid= result[0].uid;
		}
	});
})

//退出登录
router.get("/logout",(req,res)=>{
	req.session.uid = null;
	res.send({code:1,msg:"退出成功"})

})


//导出路由器
module.exports=router;
