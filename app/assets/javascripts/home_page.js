$(document).on('turbolinks:load', function() {

  var pictures = ["assets/edna_0.jpg", "assets/edna_1.jpg", "assets/edna_2.jpg"];
  var counter = 1;

  if ( $(window).width() < 992 ) {
    // $("#picture-half").css({'background-image': 'url(' + pictures[0] + ')', 'background-size': 'cover'});
    $("#picture-half img").height($(window).height() - $('#nav-bar-half').height());
    $("#picture-half img").width($(window).width());
    $("#nav-bar-half").css({'padding-top': $(window).height() * .01}); 
  } else {
    // $("#picture-half").css({'background-image': 'url(' + pictures[0] + ')', 'background-size': 'cover'});
    $("#picture-half").height($(window).height()- 1);
    $("#picture-half").width($(window).width() - $('#nav-bar-half').width() - 24);
    $("#nav-bar-half").css({'padding-top': $(window).height() * .28}); 
  }

  window.addEventListener("resize", adjustPicture);

  function adjustPicture(){
    if ( $(window).width() < 992 ) {
      // $("#picture-half").css({'background-image': 'url(' + pictures[0] + ')', 'background-size': 'cover'});
      $("#picture-half").height($(window).height() - $('#nav-bar-half').height());
      $("#picture-half").width($(window).width());
      $("#nav-bar-half").css({'padding-top': $(window).height() * .01}); 
    } else {
      // $("#picture-half").css({'background-image': 'url(assets/edna_0.jpg)', 'background-size': 'cover'});
      $("#picture-half").height($(window).height()- 1);
      $("#picture-half").width($(window).width() - $('#nav-bar-half').width() - 24);
      $("#nav-bar-half").css({'padding-top': $(window).height() * .28}); 
    }
  }

  // setInterval(changeBackground, 5000);

  function changeBackground() {
    if (counter == 0) {
      $('#picture-half').fadeOut();
      $("#picture-half").css({'background-image': 'url(' + pictures[counter] + ')', 'background-size': 'cover'});
      $('#picture-half').fadeIn();
      counter++;
    } else if (counter == 1) {
      $('#picture-half').fadeOut();
      $("#picture-half").css({'background-image': 'url(' + pictures[counter] + ')', 'background-size': 'cover'});
      $('#picture-half').fadeIn();
      counter++;
    } else {
      $('#picture-half').fadeOut();
      $("#picture-half").css({'background-image': 'url(' + pictures[counter] + ')', 'background-size': 'cover'});
      $('#picture-half').fadeIn();
      counter = 0;
    }
  }

});
