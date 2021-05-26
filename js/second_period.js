$(document).ready(function($){

    
    $("img").on("click", function() {
        var video = "https://player.vimeo.com/video/555266483?autoplay=1#"
        var min = $(this).attr("id");
        console.log(min)
        video += "t=" + min;
        $(".video_indexing iframe").attr("src", video);
        console.log(video);
        // document.getElementsByTagName('iframe')[0].src = video;
    });
})