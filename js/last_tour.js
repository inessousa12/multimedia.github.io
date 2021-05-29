$(document).ready(function($){
    // CSSMap;
    $("#map-europe").CSSMap({
        "size": 540,
        "onClick": function(e){
        // id do elemento = segundos do video que temos de enviar
        // console.log(e[0].id);
        var video = "https://www.youtube.com/embed/JkbTI-UPdZs?autoplay=1&"
        var min = e[0].id;
        console.log(min)
        video += "start=" + min + "&autoplay=1";
        console.log(video);
        document.getElementsByTagName('iframe')[0].src = video;
        },
    });
});