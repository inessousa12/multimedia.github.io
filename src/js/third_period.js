$(document).ready(function($){
    
    $("img").on("click", function() {
        var video = "https://www.youtube.com/embed/MzV7eVULyAM?autoplay=1&"
        var min = $(this).attr("id");
        console.log(min)
        video += "start=" + min + "&autoplay=1";
        console.log(video);
        document.getElementsByTagName('iframe')[0].src = video;
    });
})