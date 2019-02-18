$(function(){
    function loadPage(pno=0){
        var kwords = decodeURI(location.search.split("=")[1]);
        $.ajax({
            url:"http://127.0.0.1:3000/product/list",
            type:"get",
            data:{kwords,pno},
            dataType:"json",
        }).then(result=>{

            var {products,pageCount}=result;
            console.log(result)
            var html="";
            var htmla="";
            for(var item of products){
                html += `
                <li>
                    <a href="${item.href}" class="p_item">
                        <div class="corner"></div>
                        <div class="p_img"><img src="${item.pic}" alt=""></div>
                        <h5>${item.title}</h5>
                        <p class="p_price">
                            <span class="pp_01">￥${item.sale_price.toFixed(2)}</span>
                            <span class="pp_02">8.0折</span>
                            <lable class="pp_03">已售 ${item.sold_quantity}件</lable>
                        </p>
                    </a>
                </li>
                `
            }
            $(".rb_ul").html(html);
            for(var i=pno;i<pno+10;i+=2){
                htmla += `
                <li class="item">
                    <a href="${products[i].href}">
                        <div class="item_img">
                            <img src="${products[i].pic}" alt="">
                        </div>
                        <div class="item_price">
                            <h5>${products[i].title}</h5>
                            <div>
                                <span>¥</span>
                                ${products[i].sale_price.toFixed(2)}
                                <label for="">已售 ${products[i].sold_quantity} 件</label>
                            </div>
                        </div>
                        <div class="clear"></div>
                    </a>
                </li> 
                `  
            }
            $(".leftBox3_item").html(htmla);

            html = `
                    <span>${pno+1}</span>/
                    <span>${pageCount}</span>
                    <a href="javascript:;"><</a>
                    <a href="javascript:;">></a>
            `
            $("#page").html(html)

        })
    }
    loadPage();
    $("#page").on("click","a",function(e){
        e.preventDefault();
        var pno;
        var span1 = $("#page span:first");
        var span2 = span1.next()
        
        //加
        if( $(this).html()== `&gt;` ){
            if(span1.html() >= span2.html() ){
                var i =  parseInt( span1.html() )
                pno = i-1 
            }else{
                var i =  parseInt( span1.html() )
                span1.html(i+1)
                pno = i;
            }
        }else{
            console.log(span1.html())
            if(span1.html() <= 1){
                var i =  parseInt( span1.html() )
                pno = i-1;
                span1.html(i)
            }else{
                var i =  parseInt( span1.html() )
                span1.html(i-1)
                pno = i-2; 
            }
        }

        // if ( span1.html() <= span2.html()-1 && $(this).html()== `&gt;`){
        //     var i =  parseInt( span1.html() )
            
        //     span1.html(++i)
        //     pno = i;

        // }else if( span1.html() >1 && $(this).html()== `&lt;` ){ 
        //     var i =  parseInt( span1.html() )
        //     span1.html(i-1)
        //     pno = i-2;
        // }else{
        //     var i =  parseInt( span1.html() )
        //     pno = i
        // }
        loadPage(pno); 
    })
})



