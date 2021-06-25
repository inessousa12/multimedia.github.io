$(function(){
  theme = localStorage.getItem("theme");
  if(theme == "dark"){
	$('html').addClass('dark-mode');
	$('body').addClass('dark-mode');
	$('.timeline_container > ol').addClass('darkmode');
	$('.timeline_container > ol > li').addClass('dark-mode');
	$("#dark_mode").prop('checked', true);
  }
});

$(document).ready(function($){
	
	
    $("li").on("click", function() {
        $("li").removeClass("active");
        $(this).addClass("active");
    })

    $(".home_button").on("click", function() {
        document.location.href="../multimedia.github.io/index.html";
    })

    $(".back_button").on("click", function() {
        window.history.back(); //goes back to the last page visited
    })

    $("#first_period").on("click", function() {
        document.location.href="../multimedia.github.io/first_period.html";
    })

    $("#second_period").on("click", function() {
        document.location.href="../multimedia.github.io/second_period.html";
    })

    $("#third_period").on("click", function() {
        document.location.href="../multimedia.github.io/third_period.html";
    })

    $("#fourth_period").on("click", function() {
        document.location.href="../multimedia.github.io/fourth_period.html";
    })

    $("#last_tour").on("click", function() {
        document.location.href="../multimedia.github.io/last_tour.html";
    })
});
	
function set_dark_mode(obj) {
  if($("#dark_mode").is(":checked")){
	$('html').addClass('dark-mode');
	$('body').addClass('dark-mode');
	$('.timeline_container > ol').addClass('darkmode');
	$('.timeline_container > ol > li').addClass('dark-mode');
	localStorage.setItem('theme', 'dark');
  }else{
	$('html').removeClass('dark-mode');
	$('body').removeClass('dark-mode');
	$('.timeline_container > ol').removeClass('darkmode');
	$('.timeline_container > ol > li').removeClass('dark-mode');
	localStorage.setItem('theme', 'light');
  }
}