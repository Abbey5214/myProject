$(function(){
    $.ajax({
        url:"http://127.0.0.1:5500/header.html",
        type:"get",
        success: function(res) {
            $("<link rel='stylesheet' href='css/header.css'>").appendTo("head");
            $(res).replaceAll("#header");

            var $input  =   $(".inputtext");
            var $btnSearch  =  $(".inputbutton");

            $btnSearch.click(function(e){
                e.preventDefault();
                if($input.val().trim().length>0)
                location.href="/product_list.html?kwords="+$input.val()
            });
            $input.keyup(function(e){
                e.preventDefault();
                if(e.keyCode==13){
                    $btnSearch.click();
                }
            })
            if(location.search.indexOf("kwords")!=-1){
                $input.val(
                    decodeURI(
                        location.search.split("=")[1]
                    )       
                )
            }
            //登录接收页面
            var code = sessionStorage.getItem("code");
            var phone = sessionStorage.getItem("phone");
            var uid = sessionStorage.getItem("uid");
            //console.log(code,uid ,phone)
            if(uid>0){
                // console.log( $(".login_html").html() )
                $(".login_html").html(`欢迎您`+phone);
                $(".login_html").next().html("退出登录");
                //用户退出登录
                $(".logout").click(function(e){
                    e.preventDefault();
                    //console.log("test");
                    $.ajax({
                        url:"http://127.0.0.1:3000/user/logout",
                        type:"get",
                        dataType:"json"
                      }).then(result=>{
                        //console.log(result)
                        $(".login_html").html("登录/注册");     
                        sessionStorage.uid=null;
                        sessionStorage.phone=null;
                        sessionStorage.code=-1;
                      })
                })

            }
            //${".icon_login"}.html(phone)
            
            

        }
    })
})