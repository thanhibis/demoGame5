"use strict";

//menu header
$('.js-mobile').on('click', function () {
  $(this).toggleClass("js-mobile--close");
  $("html").toggleClass("js-locked");
  // $(".nav-menu").slideToggle();
  // e.preventDefault();
  $(".header-nav").fadeToggle();
});
$('.float-right__menu-option').on('click', function () {
  $(this).toggleClass("active");
  $(".float-right").toggleClass("active");
});

//backtop
jQuery(document).ready(function ($) {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > $("#footer").offset().top - $(window).outerHeight()) {
      $(".float-right").addClass("fixd");
    } else {
      $(".float-right").removeClass("fixd");
    }
  });
  $('.js-backtop').click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});