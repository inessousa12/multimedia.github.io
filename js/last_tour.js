var player;
var checkInt; // save this as a var in this scope so we can clear it later
function onYouTubePlayerAPIReady() {
    window.player = new YT.Player('player');
    startInterval()
}

function startInterval() {
    //checks every 1000ms to see if the video has reached 6s
    checkInt = setInterval(function() {
    console.log(player.getCurrentTime());
        if (player.getCurrentTime() > 1) {
            changeSrc();
            clearInterval(checkInt);
        };
    }, 1000)
}

function changeSrc() {
    document.getElementById("0").className += ' focus'
}

$( window ).on( "load", onYouTubePlayerAPIReady );

$( window ).on( "load", startInterval );

$(document).ready(function($){

    // CSSMap;
    $("#map-europe").CSSMap({
        "size": 540,
        "onClick": function(e){
            var video = "https://www.youtube.com/embed/JkbTI-UPdZs?autoplay=1&"
            var min = e[0].id;
            console.log(min)
            video += "start=" + min + "&autoplay=1";
            console.log(video);
            document.getElementsByTagName('iframe')[0].src = video;
        },
    });
});