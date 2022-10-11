"use strict";

var menu_btn = $(".menu_btn");
menu_btn.on('click', function () {
  if ($(".activ").length == 1) {
    $(".menu").addClass("collapse");
    $(".activ").removeClass("activ");
    $(".menu_btn").removeClass("Kres");
  } else {
    $(".menu").removeClass("collapse");
    $(".menu").addClass("activ");
    $(".menu_btn").addClass("Kres");
  }
});
var button_Slider = $(".clic");
button_Slider.on('click', function () {
  var butSCLICK = $(this).attr("data-progress");
  butSCLICK = $(butSCLICK);
  $(".button_Slider>ul>li").removeClass("button_Slider_activ");
  butSCLICK.addClass("button_Slider_activ");
  $(".text_Slider").removeClass("header__text_activ");
  $(".text_Slider>h6").removeClass("header__text_activ_h6");
  $(".text_Slider>p").removeClass("header__text_activ_P");
  var item1 = $(".item1");
  var item2 = $(".item2");

  if (butSCLICK.selector == ".clic1") {
    item1.text("01");
    item2.text("02");
  } else if (butSCLICK.selector == ".clic2") {
    item1.text("02");
    item2.text("03");
  } else if (butSCLICK.selector == ".clic3") {
    item1.text("03");
    item2.text("04");
  } else if (butSCLICK.selector == ".clic4") {
    item1.text("04");
    item2.text("01");
  }

  setTimeout(function () {
    $(".text_Slider").addClass("header__text_activ");
    $(".text_Slider>h6").addClass("header__text_activ_h6");
    $(".text_Slider>p").addClass("header__text_activ_P");
  }, 10);
});
var ComentAfter = $(".butrid");
var ComentBefor = $(".butleft");
var Comenr = $(".main__What__coment");
var i = 0;
ComentAfter.on('click', function () {
  Comenr.removeClass("leftComent0");
  Comenr.removeClass("right0");
  Comenr.removeClass("leftComent0");

  if (i == 0) {
    i++;
    Comenr.addClass("leftComent0");
  } else {
    Comenr.addClass("leftComent2");
    i = 0;
  }
});
ComentBefor.on('click', function () {
  Comenr.removeClass("leftComent0");
  Comenr.removeClass("right0");
  Comenr.removeClass("leftComent0");

  if (i == 0) {
    i--;
    Comenr.addClass("right0");
  } else {
    Comenr.addClass("leftComent2");
    i = 0;
  }
});