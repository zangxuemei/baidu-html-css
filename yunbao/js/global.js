/**************全局调用*******************/
jQuery(function ($) {
    var hidden = false;
    /*全部导航触发效果*/
    $('.header-bar .trigger').on('click',function (e) {
        openSide();
        hidden = false;
        e.stopPropagation();
        
        $('body').on('click.sidenav touchend.sidenav',function (e) {
            if(e.target.parentNode.parentNode.className == "nav on"){
                return
            }
          if(hidden) return;
          closeSide();
          hidden = true;
        });
    });
    $('.nav').on('click',function (e) {
      e.stopPropagation();
    })
    
  
    function openSide () {
    	var win=window.innerWidth;
      $('.nav').addClass('on');
      $('html,body').addClass('holding');
      $('body').addClass('slide-left holding-right').on("touchmove",function(event){
          event.preventDefault;//禁用左右滑动
      }, false);
      $('.header-ctent').width(win);
    }
    function closeSide () {
     $('body').removeClass('slide-left');
     setTimeout(function () {
       $('.nav').removeClass('on');
       $('body').removeClass('holding-right').off("touchmove");//接触禁用左右滑动
       $('html,body').removeClass('holding');
       $('.header-ctent').removeAttr('style')
     },300);
   }

/*图片触摸弹出缩放层*/
if ($('.zoompic').length>0) {
$('<section class="imgzoom_pack">'+
            '<div class="imgzoom_x">X</div>'+
            '<div class="imgzoom_img"><img src="" /></div>'+
    '</section>').appendTo('body');
  ImagesZoom.init({
    "elem": ".zoompic"
  });
};

});