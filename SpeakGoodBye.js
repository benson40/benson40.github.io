(function(window) {
    var byespeaker = new Object();
    var speakWord = "Good Bye";
    byeSpeaker.speak = function speak(name) {
        console.log(speakWord + " " + name);
    };
    window.byespeaker = byeSpeaker;
})(window);
