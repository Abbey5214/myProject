SET NAMES UTF8;
DROP DATABASE IF EXISTS flower;
CREATE DATABASE flower CHARSET=UTF8;
USE flower;

/*花的品种 fid品种编号（1） fname花材（rose） */
CREATE TABLE flower_type(
 lid INT PRIMARY KEY AUTO_INCREMENT,     #编号
 fid    INT PRIMARY KEY AUTO_INCREMENT,		#品种编号
 fname  VARCHAR(50)			                #花材（rose）
);

/*flower的商品信息：id产品主编号（系统给） title标题*/
CREATE TABLE flower(
 lid INT PRIMARY KEY AUTO_INCREMENT,     #编号
 family_id INT,                          #所属套餐编号
 title		VARCHAR(20),                   #标题
 discript VARCHAR(50),                   #描述
 price		DOUBLE(10,2),		               #原价格
 sale_price	DOUBLE(10,2),                #价格
 /**color		VARCHAR(20),**/		           #颜色
 /**suit_users	VARCHAR(20),**/		       #适用对象
 /**adapter	VARCHAR(20),**/	             #用途(适用场景)
 /**type		VARCHAR(20),**/		           #类别(花艺说明)
 quantity	INT,			                     #枝数
 visit_quantity	INT,                     #访问
 sold_quantity	INT,                     #销量
 evaluate_quantity	INT,                 #评价量
 pic VARCHAR(200),	                     #图片
 href VARCHAR(200)                       #商品路径
);

/**用户信息**/
CREATE TABLE flower_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  phone VARCHAR(16),
  upwd VARCHAR(32)
);


/**收货地址信息**/
CREATE TABLE flower_receiver_address(
  uid INT PRIMARY KEY AUTO_INCREMENT ,     #用户编号
  receiver VARCHAR(16),       #接收人姓名
  province VARCHAR(16),       #省
  city VARCHAR(16),           #市
  county VARCHAR(16),         #县
  address VARCHAR(128),       #详细地址
  cellphone VARCHAR(16),      #手机
  fixedphone VARCHAR(16),     #固定电话
  postcode CHAR(6),           #邮编
  tag VARCHAR(16),            #标签名

  is_default BOOLEAN          #是否为当前用户的默认收货地址
);

/**购物车条目**/
CREATE TABLE flower_shoppingcart(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,      #用户编号
  product_id INT,   #商品编号 
  count INT,        #购买数量
  is_checked BOOLEAN #是否已勾选，确定购买
);

/**用户订单**/
CREATE TABLE flower_order(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  address_id INT,
  status INT,             #订单状态  1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消
  order_time BIGINT,      #下单时间
  pay_time BIGINT,        #付款时间
  deliver_time BIGINT,    #发货时间
  received_time BIGINT    #签收时间
);

/**用户订单**/
CREATE TABLE flower_order_detail(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,           #订单编号
  product_id INT,         #产品编号
  count INT               #购买数量
);

/****首页轮播广告商品****/
CREATE TABLE flower_index_carousel(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);

/****首页商品****/
CREATE TABLE flower_index_product(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  price DECIMAL(10,2),
  href VARCHAR(128),
  seq_recommended TINYINT,
  seq_new_arrival TINYINT,
  seq_top_sale TINYINT
);

/*******************/
/******数据导入******/
/*******************/
/*花的品种 fid品种编号（10） fname花材（rose） */
INSERT INTO flower_type VALUES(10,"rose");        /*玫瑰*/
INSERT INTO flower_type VALUES(20,"violet");      /*紫罗兰*/
INSERT INTO flower_type VALUES(30,"carnation");   /*康乃馨*/
INSERT INTO flower_type VALUES(40,"lily");        /*百合*/
INSERT INTO flower_type VALUES(50,"sunflower");   /*向日葵*/
INSERT INTO flower_type VALUES(60,"babysbreath"); /*满天星*/

/**产品列表**/
INSERT INTO flower VALUES
(1,1,"珍爱鲜花系列99枝红玫瑰（带灯）","99枝顶级红玫瑰，内层白色雾面纸，外层黑色巴黎纸，精美红色缎带花结",1158,498,99,25048,2190,702,"img/product/172ec_8e53.png","http://127.0.0.1:5500/product.html?lid=1"),
(2,1,"珍爱鲜花系列33枝戴安娜+尤加利叶","33枝顶级戴安娜玫瑰，0.6扎尤加利叶，白色韩素纸，精美深褐色缎带花结",638,268,33,704946,4152,1291,"img/product/16737_17eb5.png","http://127.0.0.1:5501/product.html?lid=2"),
(3,1,"浓情鲜花系列33枝红玫瑰+梦幻黑纱","33枝顶级红玫瑰，内层黑色欧雅纸，黑色网纱，外层玻璃纸包装，精美黑色缎带花结",598,268,33,272385,1704,533,"img/product/19130_dda5.png","http://127.0.0.1:5502/product.html?lid=3"),
(4,2,"浓情鲜花系列19枝苏醒玫瑰+2枝粉色桔梗— 爱你如初","19枝苏醒玫瑰，2枝粉色桔梗，0.4扎小雏菊，0.3扎栀子叶，内层白色雪梨纸，外层白色雾面纸，精美黑白罗纹带花结",438,188,21,1277848,2799,798,"img/product/16737_17eb5.png","http://127.0.0.1:5503/product.html?lid=4"),(5,2,"珍爱鲜花系列99枝戴安娜粉玫瑰+栀子叶","99枝顶级戴安娜粉玫瑰，0.2扎栀子叶，白底黑边纸包装，精美白色缎带花结",998,458,99,272159,2247,496,"img/product/24ea0_9c3b.png","http://127.0.0.1:5504/product.html?lid=5"),(6,2,"珍爱鲜花系列9枝戴安娜粉玫瑰+紫色勿忘我","9枝戴安娜玫瑰，0.4扎浅紫色勿忘我围绕，0.5扎栀子叶，内层白色雾面纸，外层浅灰色欧雅纸，精美粉色缎带花结",368,158,9,498291,3198,957,"img/product/24e5d_12b97.png","http://127.0.0.1:5505/product.html?lid=6"),(7,2,"浓情鲜花系列9枝白玫瑰+1枝蓝绣球","9枝白玫瑰，1枝蓝绣球，5枝黄金球，0.2扎栀子叶，内层白色雪梨纸，浅蓝色欧雅纸，外层透明玻璃纸，精美黑白罗纹带花结",358,168,9,497795,2871,894,"img/product/23875_e880.png","http://127.0.0.1:5506/product.html?lid=7"),(8,3,"珍爱鲜花系列66枝进口红唇玫瑰+粉雪山","66枝进口红唇玫瑰，3枝白桔梗，0.2扎粉雪山玫瑰，0.3扎迷雾泡泡，白色雾面纸包装，精美粉色缎带花结",782,368,66,272130,1659,370,"img/product/24ebc_f380.png","http://127.0.0.1:5507/product.html?lid=8"),(9,3,"浓情鲜花系列99枝黑纱红玫瑰+尤加利叶满天星","99枝顶级红玫瑰，0.1扎尤加利叶，0.1扎白满天星，内层黑色巴黎纸，外层黑色网纱包装，精美黑色缎带花结",998,458,99,272587,1671,492,"img/product/190ea_86ce.png","http://127.0.0.1:5508/product.html?lid=9"),(10,3,"珍爱鲜花系列11枝红玫瑰+栀子叶","红玫瑰11枝，0.4扎白色满天星围绕，0.5扎栀子叶，内层白色雾面纸，外层浅紫色欧雅纸，精美黑白罗纹带花结",328,148,11,272558,4656,1253,"img/product/24dfd_1235c.png","http://127.0.0.1:5509/product.html?lid=10"),(11,4,"浓情鲜花系列19枝粉玫瑰+尤加利叶","19枝粉玫瑰，0.4扎尤加利叶，内层白色雪梨纸，外层牛皮纸，精美灰色缎带花结",385,158,19,498529,2154,654,"img/product/2c020_38e4.png","http://127.0.0.1:5510/product.html?lid=11"),(12,4,"浓情鲜花系列33枝粉玫瑰+白相思梅","33枝顶级粉玫瑰，0.5扎白相思梅，内层白色雪梨纸，外层牛皮纸，精美灰色缎带花结",488,258,33,272839,2604,806,"img/product/2c72b_179ba.png","http://127.0.0.1:5511/product.html?lid=12"),(13,4,"浓情鲜花系列13枝香槟玫瑰+尤加利叶","13枝香槟玫瑰，0.4扎尤加利叶，内层白色雪梨纸，外层牛皮纸，精美灰色缎带花结",348,148,13,272823,3177,935,"img/product/2aed8_5935.png","http://127.0.0.1:5512/product.html?lid=13"),(14,4,"珍爱鲜花系列66枝红玫瑰","66枝顶级红玫瑰，内层白色雪梨纸，外层牛皮纸，精美灰色缎带花结",698,298,66,498599,2304,526,"img/product/2c888_be38.png","http://127.0.0.1:5513/product.html?lid=14"),(15,5,"珍爱鲜花系列99枝红玫瑰","99枝顶级红玫瑰，内层白色雪梨纸，外层牛皮纸，精美灰色缎带花结",720,398,99,5430172,4362,1181,"img/product/276f6_69ad.png","http://127.0.0.1:5514/product.html?lid=15"),(16,5,"浓情鲜花系列25枝粉玫瑰+蓝绣球","25枝粉玫瑰，深蓝色绣球1枝，内层白色雪梨纸，外层牛皮纸，精美灰色缎带花结",318,198,25,64208,2037,552,"img/product/24ec0_161b7.png","http://127.0.0.1:5515/product.html?lid=16"),(17,6,"珍爱鲜花系列33枝红玫瑰枪炮礼盒","33枝顶级红玫瑰，魔力铁山灰高档礼盒，牛皮纸包装，精美灰色缎带花结",458,268,33,1092573,3807,1071,"img/product/278fa_15503.png","http://127.0.0.1:5516/product.html?lid=17"),(18,6,"亲情鲜花系列10枝香槟玫瑰+11朵白百合枪炮礼盒","10枝香槟玫瑰，11枝白百合，0.3扎尤加利叶，魔力铁山灰高档礼盒，牛皮纸包装，精美灰色缎带花结",658,268,21,497905,1137,246,"img/product/2c693_17bb3.png","http://127.0.0.1:5517/product.html?lid=18"),(19,6,"倾慕鲜花系列25枝粉玫瑰+白相思梅枪炮礼盒","25枝粉玫瑰，1扎白相思梅，魔力铁山灰高档礼盒，牛皮纸包装，精美灰色缎带花结",528,258,26,73356,1899,570,"img/product/24d42_3d4a.png","http://127.0.0.1:5518/product.html?lid=19"),(20,7,"挚友鲜花系列9枝向日葵枪炮礼盒","9枝向日葵，0.3扎尤加利叶，魔力铁山灰高档礼盒，牛皮纸包装，精美灰色缎带花结",582,268,9,64188,1089,354,"img/product/27b41_13df8.png","http://127.0.0.1:5519/product.html?lid=20"),(21,7,"33枝红色康乃馨，0.5扎粉色满天星，魔力铁山灰高档礼盒，灰色韩素纸包装，精美红色和蓝色缎带花结","33枝红色康乃馨，0.5扎粉色满天星，魔力铁山灰高档礼盒，灰色韩素纸包装，精美红色和蓝色缎带花结",582,268,33,82409,1650,467,"img/product/1c070_11993.png","http://127.0.0.1:5520/product.html?lid=21"),(22,7,"19枝香槟玫瑰，3枝白桔梗，黑色高档礼盒，黑白罗纹带花结","",582,268,21,73345,3828,1192,"img/product/1645d_10bd8.png","http://127.0.0.1:5521/product.html?lid=22"),(23,8,"亲情鲜花系列12枝粉康乃馨+白满天星","12枝粉康乃馨，0.5扎白满天星，内层白色雪梨纸，外层牛皮纸，精美灰色缎带花结",338,118,12,498142,1413,405,"img/product/2c507_320f.png","http://127.0.0.1:5522/product.html?lid=23"),(24,8,"亲情鲜花系列21枝红康乃馨+白相思梅","21枝红康乃馨，0.4扎白相思梅适量，3枝尤加利叶，内层白色雪梨纸，外层牛皮纸，精美灰色缎带花结",298,168,21,271966,957,311,"img/product/16f96_4449.png","http://127.0.0.1:5523/product.html?lid=24"),(25,8,"祝福鲜花系列16朵香水粉百合+粉满天星","16朵香水粉百合，0.5扎粉色满天星，内层白色雪梨纸，外层牛皮纸，精美灰色缎带花结",358,228,16,272204,3660,747,"img/product/1752f_5438.png","http://127.0.0.1:5524/product.html?lid=25"),(26,9,"挚友鲜花系列7枝向日葵+3枝白桔梗","7枝向日葵，3枝白桔梗，0.7扎栀子叶，内层英文雾面纸，外层牛皮纸，精美黄褐色缎带花结",418,188,10,82464,1557,482,"img/product/2768d_31e8.png","http://127.0.0.1:5525/product.html?lid=26"),(27,9,"祝福鲜花系列12枝粉康乃馨+10朵香水白百合","12枝粉康乃馨，10枝香水白百合，0.2扎尤加利叶，内层白色雪梨纸，外层牛皮纸，精美灰色缎带花结",508,208,22,45367,1509,383,"img/product/193bf_d133.png","http://127.0.0.1:5526/product.html?lid=27"),(28,9,"亲情鲜花系列19枝红色康乃馨+白满天星" ,"19枝红色康乃馨，0.4扎白满天星，0.3扎尤加利叶，内层白色雪梨纸，外层牛皮纸，精美灰色缎带花结",428,168,19,498169,1374,403,"img/product/2c6f8_17c32.png","http://127.0.0.1:5527/product.html?lid=28");


/**产品图片**/
CREATE TABLE flower_pic(
 pid INT PRIMARY KEY AUTO_INCREMENT,  #编号(系统提供)
 lid INT   ,
 sm VARCHAR(128),                     #图片路径
);

INSERT INTO flower_pic VALUES
("null",1,"img/product/sm/172ec_8e53.png"),
("null",1,"img/product/sm/24f0c_10387.jpg"),
("null",1,"img/product/sm/24f17_742b.jpg"),
("null",1,"img/product/sm/1731e_56fa.jpg"),
("null",2,"img/product/sm/16737_17eb5.png"),
("null",2,"img/product/sm/1b977_e365.jpg"),
("null",2,"img/product/sm/25500_104a5.jpg"),
("null",2,"img/product/sm/25505_1725b.jpg"),
("null",3,"img/product/sm/19130_dda5.png"),
("null",3,"img/product/sm/19134_5f1c.png"),
("null",3,"img/product/sm/19138_7b27.png"),
("null",3,"img/product/sm/1913c_c736.png"),
("null",4,"img/product/sm/2373d_15bd3.png"),
("null",4,"img/product/sm/1c2e4_58f9.jpg"),
("null",4,"img/product/sm/238e6_5cd3.jpg"),
("null",4,"img/product/sm/238eb_5736.jpg"),
("null",5,"img/product/sm/24ea0_9c3b.png"),
("null",5,"img/product/sm/25e03_87e9.jpg"),
("null",5,"img/product/sm/24eaa_162b4.jpg"),
("null",5,"img/product/sm/24ea6_178c8.jpg"),
("null",6,"img/product/sm/24e5d_12b97.png"),
("null",6,"img/product/sm/1b29b_177e4.jpg"),
("null",6,"img/product/sm/24e61_b2aa.jpg"),
("null",6,"img/product/sm/27168_1111f.jpg"),
("null",7,"img/product/sm/23875_e880.png"),
("null",7,"img/product/sm/27c87_672a.jpg"),
("null",7,"img/product/sm/23880_5ec1.jpg"),
("null",7,"img/product/sm/27c8f_11b53.jpg"),
("null",8,"img/product/sm/24ebc_f380.png"),
("null",8,"img/product/sm/24ec0_bb6b.jpg"),
("null",8,"img/product/sm/24ec7_434d.jpg"),
("null",8,"img/product/sm/24ec4_a6f3.jpg"),
("null",9,"img/product/sm/190ea_86ce.png"),
("null",9,"img/product/sm/190ed_18373.jpg"),("null",9,"img/product/sm/190f5_15cf9.jpg"),("null",9,"img/product/sm/190f0_8519.jpg"),("null",10,"img/product/sm/24dfd_1235c.png"),("null",10,"img/product/sm/24e00_13d06.jpg"),("null",10,"img/product/sm/24e03_11203.jpg"),("null",10,"img/product/sm/24e07_18556.jpg"),("null",11,"img/product/sm/2c020_38e4.png"),("null",11,"img/product/sm/16663_711f.jpg"),("null",11,"img/product/sm/2a053_185ea.jpg"),("null",11,"img/product/sm/2c050_d54c.jpg"),("null",12,"img/product/sm/2c72b_179ba.png"),("null",12,"img/product/sm/256a3_185ab.jpg"),("null",12,"img/product/sm/2c764_114ac.png"),("null",12,"img/product/sm/2c75e_168e7.png"),("null",13,"img/product/sm/2aed8_5935.png"),("null",13,"img/product/sm/2ae12_c12b.jpg"),("null",13,"img/product/sm/2aee8_416c.jpg"),("null",13,"img/product/sm/2ae21_2c30.jpg"),("null",14,"img/product/sm/2c888_be38.png"),("null",14,"img/product/sm/2c895_7541.jpg"),("null",14,"img/product/sm/2c88c_17be5.jpg"),("null",14,"img/product/sm/2c890_1671d.jpg"),("null",15,"img/product/sm/276f6_69ad.png"),("null",15,"img/product/sm/2ca14_12642.jpg"),("null",13,"img/product/sm/2aed8_5935.png"),("null",15,"img/product/sm/2ca18_35c2.jpg"),("null",16,"img/product/sm/24ec0_161b7.png"),("null",16,"img/product/sm/19665_ebb0.jpg"),("null",16,"img/product/sm/24ec3_53d2.jpg"),("null",16,"img/product/sm/2c8e7_2744.jpg"),("null",17,"img/product/sm/278fa_15503.png"),("null",17,"img/product/sm/2a9b4_6ad0.jpg"),("null",17,"img/product/sm/278ff_b368.jpg"),("null",17,"img/product/sm/278f5_16039.jpg"),("null",18,"img/product/sm/2c693_17bb3.png"),("null",18,"img/product/sm/27cd6_167e5.jpg"),("null",18,"img/product/sm/2c6a1_14c2f.jpg"),("null",18,"img/product/sm/2c69b_1820b.jpg"),("null",19,"img/product/sm/24d42_3d4a.png"),("null",19,"img/product/sm/14edb_aa7d.jpg"),("null",19,"img/product/sm/24d75_16ebb.jpg"),("null",19,"img/product/sm/24d46_179f4.jpg"),("null",20,"img/product/sm/27b41_13df8.png"),("null",20,"img/product/sm/2755c_b3e9.jpg"),("null",20,"img/product/sm/27b47_1022d.jpg"),("null",20,"img/product/sm/27b4b_10536.jpg"),
("null",21,"img/product/sm/1c070_11993.png"),("null",21,"img/product/sm/1ae21_77fa.jpg"),
("null",21,"img/product/sm/1c074_a0a7.jpg"),("null",21,"img/product/sm/1c077_956e.jpg"),
("null",22,"img/product/sm/1645d_10bd8.png"),("null",22,"img/product/sm/25934_18213.jpg"),
("null",22,"img/product/sm/16465_16e55.png"),("null",22,"img/product/sm/2812d_9e34.png"),
("null",23,"img/product/sm/2c507_320f.png"),("null",23,"img/product/sm/169f0_1670c.jpg"),
("null",23,"img/product/sm/2c516_129e8.jpg"),("null",23,"img/product/sm/2c50c_f0e1.jpg"),
("null",24,"img/product/sm/16f96_4449.png"),("null",24,"img/product/sm/16fa0_2dda.jpg"),
("null",24,"img/product/sm/16fa5_103ab.jpg"),("null",24,"img/product/sm/16fa9_c8fb.jpg"),
("null",25,"img/product/sm/1752f_5438.png"),("null",25,"img/product/sm/25e5c_9086.jpg"),
("null",25,"img/product/sm/1753d_7386.jpg"),("null",25,"img/product/sm/17541_17bb3.jpg"),
("null",26,"img/product/sm/2768d_31e8.png"),
("null",26,"img/product/sm/18900_11c94.jpg"),
("null",26,"img/product/sm/18909_1222e.jpg"),
("null",26,"img/product/sm/18914_8200.jpg"),
("null",27,"img/product/sm/193bf_d133.png"),
("null",27,"img/product/sm/193bb_d6cf.jpg"),
("null",27,"img/product/sm/193eb_52aa.jpg"),
("null",27,"img/product/sm/193f1_4773.jpg"),
("null",28,"img/product/sm/2c6f8_17c32.png"),
("null",28,"img/product/sm/19a4c_68e2.jpg"),
("null",28,"img/product/sm/2c6fc_e73a.jpg"),
("null",28,"img/product/sm/19a8f_11d0a.jpg")
