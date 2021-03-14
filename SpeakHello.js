(function(window) {
    var hellospeaker = new Object();
    var speakWord = "Hello";
    helloSpeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.hellospeaker = helloSpeaker;
})(window);
