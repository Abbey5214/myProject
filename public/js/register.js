//注册
var txtPhone =$("#user_register>ul>li:first-child>div>input");
var txtPwd = $("#user_register>ul>li:nth-child(2)>div>input");
var txtPwd1 = $("#user_register>ul>li:nth-child(3)>div>input");
var txtCode =$("#user_register>ul>li:nth-child(4)>div>input");
// var $span=$(".prompt");
txtPhone.focus(function(){getFocus(this)})
txtPwd.focus(function(){getFocus(this)})
txtPwd1.focus(function(){getFocus(this)})
txtCode.focus(function(){getFocus(this)})

function getFocus(txt){
    txt.className="txtbold";    
    $(txt).parent().parent().siblings().children().children().removeClass("txtbold");
}
var codeChars=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    $(".createCode_register").click(function () {
        var $code="";
        for(i=0;i<6;i++){
            var index=Math.floor(Math.random()*62);
            $code+=codeChars[index];
        }
        //console.log($code)
        $(this).html($code)
    })
    // // 验证验证码
    // $(".user_input_register").blur(function(){
    //     var $html = $(".createCode_register").html();
    //     var $swit = $(this).val();
    //     // var $span=$(".prompt");
    //     console.log($swit,$html)
    //     if(!$swit){
    //         $(this).next().next().html(`<img src='image/err.png'>验证码不能为空`);
    //     }else if( $swit.toLowerCase() == $html.toLowerCase() ){
    //         $(this).next().next().html(`<img src='image/ok.png'>验证码正确`);
    //     }else{
    //         $span.html(`<img src='image/err.png'>验证码输入错误`);
    //     }
    // })
