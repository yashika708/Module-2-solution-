(function(window) {
    var speakWorld = "Hello";
    var helloSpeaker = function (name) {
        console.log(speakWorld + " " + name);
    }

    window.helloSpeaker = helloSpeaker;
})(window);