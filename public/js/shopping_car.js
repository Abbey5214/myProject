$(function(){










    $(".check_choose").click(function(){
        if(!$(".check_change")[0].checked){
            $(".check_choose").css("background-position","-336px -28px");
            $(".check_change")[0].checked =  true;  
        }else{
            $(".check_choose").css("background-position","-308px -28px");
            $(".check_change")[0].checked = false;
        }
        
    })
})