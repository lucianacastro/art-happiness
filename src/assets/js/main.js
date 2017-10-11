/**
 * art-happiness
 */

var msg = 'art-happiness';

function printLog(log){
    'use strict';
  return console && console.log(log);
}

printLog(msg);

$(function() {
	$("#home-button").click(function() {
	   	$('html, body').animate({
	       scrollTop: $("#main-herospace").offset().top
	   	}, 600);
	   	$(".nav-menu").css("display", "none");
	});
	$("#what-we-button").click(function() {
	   	$('html, body').animate({
	       scrollTop: $("#what-we").offset().top
	   	}, 600);
	   	$(".nav-menu").css("display", "none");
	});
	$("#testimonials-button").click(function() {
	   	$('html, body').animate({
	       scrollTop: $("#testimonials").offset().top
	   	}, 600);
	   	$(".nav-menu").css("display", "none");
	});
	$("#contact-button").click(function() {
	   	$('html, body').animate({
	       scrollTop: $("#contact-us").offset().top
	   	}, 600);
	   	$(".nav-menu").css("display", "none");
	});
	$("#scroll-button").click(function() {
	   	$('html, body').animate({
	       scrollTop: $("#contact-us").offset().top
	   	}, 600);
	   	$(".nav-menu").css("display", "none");
	});

	/*Mobile*/
	$(".toggle-button").click(function() { 
		$(".nav-menu").fadeToggle('fast');
	});

	$('.nav-menu__button').click(function() {
		$('.nav-menu__button').removeClass('nav-menu__button--active');
		$(this).addClass('nav-menu__button--active');
	});

});

$(window).scroll(function() {
	if ($(document).scrollTop() > 50) {
		$('.header').addClass('header--parallax');
	} 
	else {
		$('.header').removeClass('header--parallax');
	}
});


