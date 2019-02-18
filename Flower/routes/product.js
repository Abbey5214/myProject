//引入连接池对象
const pool=require('../pool.js');
const express=require('express');
//路由器是express下的一个功能
//创建一个空的路由器
var router=express.Router();

router.get("/list",(req,res)=>{
	var kwords = req.query.kwords;
	//console.log(kwords);
	var pno = req.query.pno;
	//console.log(pno)
	if (pno === undefined) pno=0;
	//macbook i5 128g
	kwords = kwords.split(" ");
	//[macbook,i5,128g]
	var arr = kwords.map(function(){
		return " title like ? ";
	})
	//[title like ? , title like ? , title like ?]
	var titles=arr.join(" and ");
	//title like ? and title like ? and title like ?
	var sql="select * from flower where "+titles;
	kwords.forEach(function(val,i,arr){
		kwords[i]=`%${val}%`;
	})
	  //[%macbook%,%i5%,%128g%]
	pool.query(sql,kwords,(err,result)=>{
	if(err) console.log(err);
	var count=result.length;
	var pageCount=Math.ceil(count/12)
    var products=result.slice(pno*12,pno*12+12)
								//0
								//12
								//24
	var output={pno,count,pageCount,products}
	res.send(output);
	})
})

//首页产品接口         
router.get('/index',(req,res)=>{
	var sql="select * from flower"
	pool.query(sql,(err,result)=>{
		if(err) throw err;
		res.send(result);
	});
})



//商品详情接口
router.get('/des',(req,res)=>{
	var output = {product:{},pics:[],type:{}};
	var lid = req.query.lid;
	if(lid !== undefined){
		var sql="select * from flower where lid=?" ;
		pool.query(sql,[lid],(err,result)=>{
			if(err) console.log(err);
			output.product = result[0];
		var family_id = output.product.family_id;
		var sql="select * from flower where family_id=?" ; 
		pool.query(sql,[family_id],(err,result)=>{
			if(err) console.log(err);
			output.type =result;
			var sql="select * from flower_pic where lid=?";
		pool.query(sql,[lid],(err,result)=>{
			if(err) console.log(err);
          	output.pics=result;
          	res.send(output);
		})
		})
		});
	}else{
		output.err="请提供id"
    	res.send(output);
	}	
})

//商品分类接口
router.get('/type',(req,res)=>{
	var obj=req.query;
	var $tid=obj.tid;
	if(!$tid){
		res.send("tid不存在");
		return;
	}
	var sql="select * from car where tid=?"
	pool.query(sql,[$tid],(err,result)=>{
		if (err)throw err;
		if (result.length>0){
			res.send(result);
		}else{
		    res.send("0");
		}
	});
});


//导出路由器
module.exports=router;
