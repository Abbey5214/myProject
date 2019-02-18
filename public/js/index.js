$.ajax({
    url:"http://127.0.0.1:3000/product/index",
    type:"get",
    dataType:"json",
}).then(result=>{
    //console.log(result)
    var html="";
    var htmla="";
    var htmlb="";
    var htmlc="";
    var htmld="";
    html +=`
    <li class="sale_left">
        <div>
            <span>
                <em class="hour"></em>
                <h6>小时</h6>
            </span>
            <span>
                <em class="minute"></em>
                <h6>分</h6>
            </span>
            <span>
                <em class="second"></em>
                <h6>秒</h6>
            </span>
        </div>
        <p>每天上午10：00刷新 <br> 今日抢购商品</p>
    </li>
    ` 
    for(var i=0;i<4;i++){
        html += `
        <li class="sale_item">
            <a href="${result[i].href}">
                <div class="bq">
                    <span>推荐</span>
                </div>
                <div class="sale_img">
                    <img src="${result[i].pic}" alt="">
                </div>
                <div class="sale_font">
                    <h5>${result[i].title}</h5>
                    <h6>玫瑰花 </h6>
                    <p class="price">
                        ￥
                        <span>${result[i].sale_price.toFixed(2)}</span>
                        <label>
                            直降 ¥
                            <span>${(result[i].price-result[i].sale_price).toFixed(2)}</span>
                        </label>
                    </p>
                </div>
            </a>
        </li>
        `
    }
    $(".sale_01>ul").html(html);

    for(var i=4;i<10;i++){
        htmla += `
        <li>
            <a href="${result[i].href}" class="fb_lia">
                <div class="fb_img" >
                    <img src="${result[i].pic}" alt="">
                </div>
                <h5>${result[i].title}</h5>
                <p class="fb_price">
                    <span>￥</span>
                    ${result[i].sale_price.toFixed(2)}
                    <span class="fb_sale">5.2折</span>
                    <label for="">已售 ${result[i].sold_quantity} 件</label>
                </p>
            </a>
        </li>
        `
    }
    $(".fb_right01>ul").html(htmla);
    
    for(var i=10;i<16;i++){
        htmlb += `
        <li>
            <a href="${result[i].href}" class="fb_lia">
                <div class="fb_img" >
                    <img src="${result[i].pic}" alt="">
                </div>
                <h5>${result[i].title}</h5>
                <p class="fb_price">
                    <span>￥</span>
                    ${result[i].sale_price.toFixed(2)}
                    <span class="fb_sale">5.2折</span>
                    <label for="">已售 ${result[i].sold_quantity} 件</label>
                </p>
            </a>
        </li>
        `
    }
    $(".fb_right02>ul").html(htmlb);

    for(var i=16;i<22;i++){
        htmlc += `
        <li>
            <a href="${result[i].href}" class="fb_lia">
                <div class="fb_img" >
                    <img src="${result[i].pic}" alt="">
                </div>
                <h5>${result[i].title}</h5>
                <p class="fb_price">
                    <span>￥</span>
                    ${result[i].sale_price.toFixed(2)}
                    <span class="fb_sale">5.2折</span>
                    <label for="">已售 ${result[i].sold_quantity} 件</label>
                </p>
            </a>
        </li>
        `
    }
    $(".fb_right03>ul").html(htmlc);

    
    for(var i=22;i<28;i++){
        htmld += `
        <li>
            <a href="${result[i].href}" class="fb_lia">
                <div class="fb_img" >
                    <img src="${result[i].pic}" alt="">
                </div>
                <h5>${result[i].title}</h5>
                <p class="fb_price">
                    <span>￥</span>
                    ${result[i].sale_price.toFixed(2)}
                    <span class="fb_sale">5.2折</span>
                    <label for="">已售 ${result[i].sold_quantity} 件</label>
                </p>
            </a>
        </li>
        `
    }
    $(".fb_right04>ul").html(htmld);
    
})