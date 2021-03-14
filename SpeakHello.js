(function(window) {
    var hellospeaker = new Object();
    var speakWord = "Hello";
    hellospeaker.speak = function(name) {
        console.log(speakWord + " " + name);
    };
    window.hellospeaker = hellospeaker;
})(window);
