window.onload=function(){
    var lid=location.search.split("=")[1];
    axios.get("http://127.0.0.1:3000/product/des",{
        params:{lid},   
    }).then((res)=>{ 
        var output=res.data;
        //console.log(output);
        var{product,pics,type}=output;
        var html1="";
        var html="";
        var html2="";

        html1 += `
                        <div class="details_img">
                            <div class="img_base"></div>
                            <img src="${pics[0].sm}" alt="" class="md_pic" >
                            <div class="detail_base lg_hidden"></div>
                            <div class="lg_img lg_hidden" style="background-image: url(${pics[0].sm})" ></div>  
                        </div>
                        <div class="small_img">                  
                            <ul>
                    `
                for(var i=0;i<pics.length;i++){
                    html1 += `  
                    <li class="choose_sm_pic" >
                        <img src="${pics[i].sm}">
                    </li>
                    `
            }
            html1 +=`
                </ul>
            </div>
            `

        
        $(".product_left").html(html1);
        html += `
            <h3  class="product_title">${product.title} </h3>
            <p class="product_des">${product.discript}</p>
            <div class="product_price">
                <div class="pp_left">
                    <p>
                        <span class="price">原价</span>
                        <span class="original_price">${product.price.toFixed(2)}</span>
                        <span class="sale">${(product.sale_price/product.price*10).toFixed(1)}折</span>
                    </p>
                    <p>
                        <span class="price">促销价</span>
                        <span class="present_price_symbol">￥</span>
                        <span class="present_price">${product.sale_price.toFixed(2)}</span>
                    </p>
                </div>
                <div class="pp_right">
                    <p>
                        <span>今日特惠</span>
                        <em class="hour"></em>
                        <span>时</span>
                        <em class="minute"></em>
                        <span>分</span>
                        <em class="second"></em>
                        <span>秒</span>
                    </p>
                </div>
            </div>
            <div class="product_view">
                <ul>
                    <li>访问：<span>${product.visit_quantity}</span></li>
                    <li>销量：<span>${product.sold_quantity}</span></li>
                    <li>评价：<span>${product.evaluate_quantity}</span></li>
                    <li>配送：<span>全国1小时送达</span></li>
                </ul>
            </div>
            <div class="item_tags">
                <dl>
                    <dt>相关标签</dt>
                    <dd><a href="">爱情鲜花</a></dd>
                    <dd><a href="">玫瑰</a></dd>
                    <dd><a href="">珍爱</a></dd>
                </dl>
            </div>
            <div class="item_type">
                <div>商品类型</div>
                <div class="product_type" >
                <ul>
        `

        for(var t of type){
            console.log()
            html += `
                    <li title="${t.discript}" class="choose_type" value="${t.lid}">
                        <img src="${t.pic}" alt="">
                        <span>${t.discript}</span>
                    </li>
            `
        }
        html +=`
                </ul>
            </div>
            <div class="clearfix"></div>
            </div>
            <div class="shop_num">
                <dl>
                    <dt>数量</dt>
                    <dd><a href="javascript:;">-</a></dd>
                    <dd><input type="text" value="1"></dd>
                    <dd><a href="javascript:;">+</a></dd>
                </dl>
                <div class="clearfix"></div>
            </div>
            <div class="shop_bt">
                <a href="" class="bt_buy bt_buy1">立即购买</a>
                <a href="" class="bt_buy bt_buy2">加入购物车</a>
                <a href="" class="share"><i class="icon icon-share"></i>分享</a>
                <a href="" class="favorite"><i class="icon icon-favorite"></i>收藏</a>
                <div class="clearfix"></div>
            </div>
            <div class="flower_promise clearfix">
                <dl>
                    <dt>
                        <b>服务承诺</b>
                    </dt>
                    <dd><a href=""><i class="icon icon_promise1"></i>全国派送</a></dd>
                    <dd><a href=""><i class="icon icon_promise2"></i>1小时送达</a></dd>
                    <dd><a href=""><i class="icon icon_promise3"></i>实时拍照反馈</a></dd>
                    <dd><a href=""><i class="icon icon_promise4"></i>200%退赔承诺</a></dd>
                    <div class="clearfix"></div>
                </dl>
            </div> 
        `
        $(".product_right").html(html);
    
        //console.log(type)
        for(var t of type){
            html2+=`
                <li class="item">
                    <a href="">
                        <div class="item_img">
                            <img src=${t.pic} alt="">
                        </div>
                        <div class="item_price">
                            <h5>${t.title}</h5>
                            <div>
                                <span>¥</span>
                                ${t.sale_price.toFixed(2)}
                                <label for="">已售 ${t.sold_quantity} 件</label>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </a>
                </li>
            `
        }

        $(".leftBox3_item ul").html(html2)

        function task(){
            var end=new Date("2019/04/01 00:00:00");
            var now=new Date();
            var s=parseInt((end-now)/1000);
            var hour=document.querySelector(".pp_right>p>em.hour");
            var minute=document.querySelector(".pp_right>p>em.minute");
            var second=document.querySelector(".pp_right>p>em.second");
            //console.log(hour,minute,second)
            if(s>0){
                var d=parseInt(s/3600/24);
                if(d<10) d="0"+d;
                //s/3600/24,向下取整
                var h=parseInt(s%(3600*24)/3600);
                if(h<10) h="0"+h;
                //s/(3600*24)的余数,再/3600,向下去整
                var m=parseInt(s%3600/60);
                if(m<10) m="0"+m;
                //s/3600的余数,再/60，向下取整
                s%=60;//s/60的余数
                if(s<10) s="0"+s;
                //距离下一个假期还有: ?天?小时?分?秒
                hour.innerHTML=h;
                minute.innerHTML=m;
                second.innerHTML=s;
            }
        }
        task();
        setInterval(task,1000);

        //点击小图  中大图跟着换
        $(".choose_sm_pic img").mouseover(function(e){
            var img_url= $(this).attr("src") 
                $(".md_pic").attr("src",img_url)
                console.log("url("+img_url+")")
                $(".lg_img").css("background-image","url("+img_url+")")
            })

        $(".choose_type").click(function(){
            $(this).addClass("flower_type").siblings().removeClass("flower_type")
            console.log
            var lid = $(this).attr("value");
            //console.log(lid)
            axios.get("http://127.0.0.1:3000/product/des",{
                    params:{lid},   
            }).then((res)=>{
                var{product,pics,type}=res.data ;
                $(".product_left>img").attr("src",pics[0].sm)
        
                var a= $(".choose_sm_pic>img");

                for(var i=0;i<a.length;i++){
                    a[i].attributes[0].value=pics[i].sm
                  
                }   
                
            })
        })

        //鼠标跟随事件
        
        $(".img_base").mousemove(function(e){
            //console.log(e.offsetY)
            var top=e.offsetY-136.89;
            var left=e.offsetX-136.89;
            if(top<0)  top=0;  else if(top>194)  top=194;
            if(left<0) left=0; else if(left>194) left=194;

            $(".detail_base").removeClass("lg_hidden");

            $(".detail_base").css({top,left});

            $(".lg_img").removeClass("lg_hidden");

            $(".lg_img").css(
                "background-position",
                `-${left*200/117}px -${top*200/117}px`)

        })

        //鼠标离开
        $(".img_base").mouseout(function(e){
            $(".lg_img").addClass("lg_hidden");
            $(".detail_base").addClass("lg_hidden");
        })


    })
}

  
  

 