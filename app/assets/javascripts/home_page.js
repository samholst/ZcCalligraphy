$(document).on('turbolinks:load', function() {
  if ( $(window).width() < 992 ) {
    $("#picture-half").css({'background-image': 'url(https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/23120087_1750038968630769_6331254673603386052_o.jpg?oh=70feb8b4450bedfde21eb83f85964241&oe=5A6D0276)', 'background-size': 'cover'});
    $("#picture-half").height($(window).height() - $('#nav-bar-half').height());
    $("#picture-half").width($(window).width());
    $("#nav-bar-half").css({'padding-top': $(window).height() * .01}); 
  } else {
    $("#picture-half").css({'background-image': 'url(https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/23120087_1750038968630769_6331254673603386052_o.jpg?oh=70feb8b4450bedfde21eb83f85964241&oe=5A6D0276)', 'background-size': 'cover'});
    $("#picture-half").height($(window).height()- 1);
    $("#picture-half").width($(window).width() - $('#nav-bar-half').width() - 24);
    $("#nav-bar-half").css({'padding-top': $(window).height() * .28}); 
  }

  window.addEventListener("resize", adjustPicture);

  function adjustPicture(){
    if ( $(window).width() < 992 ) {
      $("#picture-half").css({'background-image': 'url(https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/23120087_1750038968630769_6331254673603386052_o.jpg?oh=70feb8b4450bedfde21eb83f85964241&oe=5A6D0276)', 'background-size': 'cover'});
      $("#picture-half").height($(window).height() - $('#nav-bar-half').height());
      $("#picture-half").width($(window).width());
      $("#nav-bar-half").css({'padding-top': $(window).height() * .01}); 
    } else {
      $("#picture-half").css({'background-image': 'url(https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/23120087_1750038968630769_6331254673603386052_o.jpg?oh=70feb8b4450bedfde21eb83f85964241&oe=5A6D0276)', 'background-size': 'cover'});
      $("#picture-half").height($(window).height()- 1);
      $("#picture-half").width($(window).width() - $('#nav-bar-half').width() - 24);
      $("#nav-bar-half").css({'padding-top': $(window).height() * .28}); 
    }
  }

  setTimeout(changeBackground, 2000);

  function changeBackground() {
  
  }

});
