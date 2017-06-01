$(document).ready(function () {
  if ($(window).scrollTop() > 100) {
    $(".navbar").addClass("nav-alt");
  }

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".navbar").addClass("nav-alt");
    } else {
      $(".navbar").removeClass("nav-alt");
    }
  });
});