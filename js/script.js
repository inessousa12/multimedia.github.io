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