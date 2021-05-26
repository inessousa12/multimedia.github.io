$(document).ready(function($){
    $("li").on("click", function() {
        $("li").removeClass("active");
        $(this).addClass("active");
    })

    $(".home_button").on("click", function() {
        document.location.href="../main.html";
    })

    $(".back_button").on("click", function() {
        window.history.back(); //goes back to the last page visited
    })

    $("#first_period").on("click", function() {
        document.location.href="../first_period.html";
    })

    $("#second_period").on("click", function() {
        document.location.href="../second_period.html";
    })

    $("#third_period").on("click", function() {
        document.location.href="../third_period.html";
    })

    $("#fourth_period").on("click", function() {
        document.location.href="../fourth_period.html";
    })

    $("#last_tour").on("click", function() {
        document.location.href="../last_tour.html";
    })
});