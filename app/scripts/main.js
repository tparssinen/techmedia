'use strict';
/* global $ */

$('.nav-smooth-js a[href^=\'#\']').on('click', function(e) {

  // prevent default anchor click behavior
  e.preventDefault();

  // store hash
  var hash = this.hash;
  var posY = 0;
  if(hash !== '#top') {
    posY = $(hash).offset().top - $('header').height();
  }

  // animate
  $('html, body').animate({
    scrollTop: posY
  }, 300, function(){

    // when done, add hash to url
    // (default click behaviour)
    if(hash !== '#top') {
      window.location.hash = hash;
    }
    else {
      window.location.hash = '';
    }
  });

});
