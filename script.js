(function() {
    var names = ["Karen", "Jacob", "Johnson", "Ross", "Paul", "Jason", "Neil", "David", "Lauren", "Jamy"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
