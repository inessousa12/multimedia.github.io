$(document).ready(function($){

    // CSSMap;
    $("#map-europe").CSSMap({
        "size": 540,
        "onClick": function(e){
            var min = e[0].id;
            player.loadVideoById("JkbTI-UPdZs", min, "default");
        },
    });
});

// $(document).ready(function($){

//     // CSSMap;
//     $("#map-europe").CSSMap({
//         "size": 540,
//         "onClick": function(e){
//             var video = "https://www.youtube.com/embed/JkbTI-UPdZs?autoplay=1&"
//             var min = e[0].id;
//             console.log(min)
//             video += "start=" + min + "&autoplay=1";
//             console.log(video);
//             document.getElementsByTagName('iframe')[0].src = video;
//         },
//     });
// });