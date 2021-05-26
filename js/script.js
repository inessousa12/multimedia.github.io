$(document).ready(function($){
    $("li").on("click", function() {
        $("li").removeClass("active");
        $(this).addClass("active");
    })

    $(".home_button").on("click", function() {
        document.location.href="../src/main.html";
    })

    $(".back_button").on("click", function() {
        window.history.back(); //goes back to the last page visited
    })

    $("#first_period").on("click", function() {
        document.location.href="../src/first_period.html";
    })

    $("#second_period").on("click", function() {
        document.location.href="../src/second_period.html";
    })

    $("#third_period").on("click", function() {
        document.location.href="../src/third_period.html";
    })

    $("#fourth_period").on("click", function() {
        document.location.href="../src/fourth_period.html";
    })

    $("#last_tour").on("click", function() {
        document.location.href="../src/last_tour.html";
    })
});