// $(document).on('turbolinks:load', function() {
$(document).ready(function(){
  if ( $(window).width() < 992 ) {
    $("div#nav-bar-half").insertAfter( $("div#picture-half") );
    $("#picture-half img").width($(window).width());
    $("#picture-half").css({"overflow": "hidden"});
    $("#picture-half").height($(window).height() * .5);
    $("#nav-bar-half").css({'padding-top': $(window).height() * .01}); 
  } else {
    $("#picture-half img").height($(window).height() - 1);
    $("#picture-half img").width($(window).width() - $('#nav-bar-half').width() - 32);
    $("#picture-half").css({"height": "auto"});
    $("#nav-bar-half").css({'padding-top': $(window).height() * .28}); 
  }

  window.addEventListener("resize", adjustPicture);

  function adjustPicture(){
    if ( $(window).width() < 992 ) {
      $("#picture-half img").css({"width": "100%"});
      $("#picture-half").height($(window).height() * .5);
      $("#picture-half").css({"overflow": "hidden"});
      $("div#nav-bar-half").insertAfter( $("div#picture-half") );
      $("#nav-bar-half").css({'padding-top': $(window).height() * .01}); 
    } else {
      $("div#picture-half").insertAfter( $("div#nav-bar-half") );
      $("#picture-half img").height($(window).height() - 1);
      $("#picture-half").height($(window).height() - 1);
      $("#nav-bar-half").css({'padding-top': $(window).height() * .28}); 
    }
  }
});
