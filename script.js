(function() {
    var names = ["Karen", "Jacob", "Johnson", "Ross", "Paul", "Jason", "Neil", "David", "Lauren", "Jamy"];
    for (var i = 0; i < names.length; i++) {
        var firstletter = names[i].charAt(0).toLowerCase();
        if (firstletter === 'j') {
            byespeaker.speak(names[i]);
        } else {
            hellospeaker.speak(names[i]);
        }
    }
})();