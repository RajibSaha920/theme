function menu_re_position() {
    if (jQuery(window).innerWidth() >= 640) {
        var e = jQuery(".menuWrapper .container").width(),
            t = 0;
        jQuery(".menu>ul>li").each(function(s, a) {
          var cl= jQuery(this).attr('class');
            if (t += jQuery(this).width(), t > e - 130 && (jQuery(this).hasClass("moreNav") || (jQuery(this).remove(), jQuery("#overflowMenu .ofMenu>ul").append("<li class='"+cl+"'>" + jQuery(this).html() + "</li>")), !(jQuery(".menu ul .moreNav").length > 0))) {
                var n = jQuery('<li class="moreNav"><a href="#"><span class="icon-menu"></span>'+jQuery('.menuMoreText').html()+' </a></li>');
                jQuery('.menuMoreText').html('');
                jQuery(".menu>ul").append(n), n.click(openMenu)
            }
        })
    }
}

function menu_toggle() {
    jQuery(".showhide").click(function(e) {
        jQuery(".main-menu").stop().slideToggle("slow")
    }), jQuery(document).innerWidth() < 940 && jQuery(".main-menu .nav-item a").click(function(e) {
        jQuery(this).next("div").stop().slideToggle("slow")
    })
}

function openMenu() {
    jQuery("#overflowMenu").animate({
        right: "0px"
    })
}


function menuMaxheight() {
    var mmh = jQuery(window).height()-(jQuery('#topBar').height() + jQuery('.header-wrapper').height());

    jQuery('.menuWrapper').css('max-height', mmh);
}




/*jQuery(window).resize(function(e) {
    menu_re_position();
    menuMaxheight();

});*/


/*== Menu Responsive */

function responsiveAccordion(){
  if(jQuery(document).width()<640){
  jQuery('.menu li:has(ul) ul').slideUp();
  /*jQuery('.menu li:has(ul)>a').click(function(e){
    e.preventDefault();
    jQuery(this).next('ul').stop().slideToggle('fast');
  })*/
}
}

function offMenuToggle(){
  if(jQuery(this).parent().find(">ul").length > 0) {
        e.preventDefault();
  }
}


jQuery(document).ready(function() {
  /*menu_re_position();
  responsiveAccordion();
  menuMaxheight();*/
  jQuery(".moreNav ").on("click", function(e) {
      e.preventDefault(), e.stopPropagation(), openMenu()
  });
  jQuery(".moreNav ").on("keydown", function(e) {

      9 === e.keyCode && openMenu()
  });
  jQuery(".wrapper").click(function(e) {
      var t = jQuery("#overflowMenu").width(),
          s = jQuery(".moreNav");
      0 === s.has(e.target).length && jQuery("#overflowMenu").stop().animate({
          right: -t
      })
    });

    /*jQuery(".ofMenu ul li a").hover(function(e) {

      if(jQuery(this).parent().find(">ul").length > 0) {
            e.preventDefault();
            //jQuery(".ofMenu>ul>li>ul").stop().slideUp();
              jQuery(this).next("ul.sub-menu").stop().slideToggle();
      }
    })*/

    jQuery('.ofMenu ul li').hover( function(e) {
      jQuery(this).siblings().children('ul').stop().slideUp();
      jQuery(this).children('ul').css('padding-top','0');
      jQuery(this).children('ul').css('padding-bottom','0');
      jQuery(this).children('ul.sub-menu').css('height','auto');
      jQuery(this).siblings().children('ul').css('height','auto');
      jQuery(this).children('ul').stop().slideDown();
    }, function(){
        jQuery(this).children('ul').css('height','auto');
        jQuery(this).parent().siblings().children('ul').stop().slideUp();
    });

    jQuery(".ofMenu>ul>li>a").on("keydown", function(e) {
      if(e.keyCode==9){
            jQuery(this).parent().siblings().children('ul').stop().slideUp();
            jQuery(this).next("ul").css('padding-top','0');
            jQuery(this).next("ul").css('padding-bottom','0');
            jQuery(this).next("ul").css('height','auto');
            jQuery(this).next("ul").stop().slideDown();
      }
    });

    jQuery(".ofMenu>ul>li>ul>li>a").on("keydown", function(e) {
      if(e.keyCode==9){
            jQuery(this).parent().siblings().children('ul').stop().slideUp();
            jQuery(this).next("ul").css('padding-top','0');
            jQuery(this).next("ul").css('padding-bottom','0');
            jQuery(this).next("ul").css('height','auto');
            jQuery(this).next("ul").stop().slideDown();
      }
    });

    jQuery(".menuToggle").click(function(e) {
        e.preventDefault();
        jQuery(".menuWrapper").stop().slideToggle();
    });
    jQuery(".closeMenu").on("keydown", function(e) {
        if (9 === e.keyCode) {
            var t = jQuery("#overflowMenu").width();
            jQuery(this).parent("#overflowMenu").stop().animate({
                right: -t
            })
        }
    });
    jQuery(".closeMenu").on("click", function(e) {
       e.preventDefault();
       var t = jQuery("#overflowMenu").width();
       jQuery(this).parent("#overflowMenu").stop().animate({
           right: -t
       })
   });


  // Setup the a11y nav
   

  // RWD Nav Pattern
  
         

     
});
/*
jQuery(function(){
    jQuery('.nav').setup_navigation();
});
*/
