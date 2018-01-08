
$(function(){
    var $tab = $("#tab");
        $tab.on("click","li",function(){
            $(this).addClass("active").siblings().removeClass("active");
            var $li = $("#tab li");
            var $cont = $("#tab-main li");
            var index = $(this).index();
            $($cont[index]).addClass("live").siblings().removeClass("live");
    });
}
);
