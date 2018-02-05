var oo_sound;

var ConfigSound = function() {

    var mySound = document.getElementById('sound_player');
    mySound.autoplay = false;
    mySound.loop = false;
    mySound.volume = 0.3;
    var mySound_pausePromise;
    var mySound_playPromise;

    var min_Sound = document.getElementById('min_sound_player');
    min_Sound.autoplay = false;
    min_Sound.loop = false;
    min_Sound.volume = 0.25;
    var min_Sound_pausePromise;
    var min_Sound_playPromise;

    // gestion des sons sur certaines pages
    if (document.getElementById("sound_page")) {
        var audio_src = document.getElementById("sound_page").getAttribute('audio_src');
        playMainSound(audio_src);
    }

    // son boutons par défaut
    var sound_bt_next = document.querySelectorAll('a');
    for (var i = 0; i < sound_bt_next.length; i++) {
        sound_bt_next[i].addEventListener('mouseenter', function() {
            playMinSound("02.1_BoutonCommande-RollOver.mp3");
        }, false);
        sound_bt_next[i].addEventListener('mousedown', function() {
            playMinSound("02.2_BoutonCommande-AuClic.mp3");
        }, false);
    }

    // son boutons bt_final
    var sound_bt_next = document.querySelectorAll('a.sound_valide');
    for (var i = 0; i < sound_bt_next.length; i++) {
        sound_bt_next[i].addEventListener('mousedown', function() {
            playMinSound("02.3_BoutonValidez-AuClic.mp3");
        }, false);
    }
    // son boutons bt_final
    var sound_bt_next = document.querySelectorAll('a.bt_valider');
    for (var i = 0; i < sound_bt_next.length; i++) {
        sound_bt_next[i].addEventListener('mousedown', function() {
            playMinSound("02.3_BoutonValidez-AuClic.mp3");
        }, false);
    }

    // son boutons valider
    var sound_bt_valider = document.querySelectorAll('.sound_bt_valider');
    for (var i = 0; i < sound_bt_valider.length; i++) {
        sound_bt_valider[i].addEventListener('mousedown', function() {
            playMinSound("02.3_BoutonValidez-AuClic.mp3");
        }, false);
    }

    // sons cases à cocher
    var cases_a_cocher = document.querySelectorAll('.qcm_container li');
    //console.log('cases_a_cocher : ' + cases_a_cocher.length)
    for (var i = 0; i < cases_a_cocher.length; i++) {
        cases_a_cocher[i].addEventListener('mouseenter', function() {
            playMinSound("04.1_CasesAselectionner-RollOver.mp3");
        }, false);
        cases_a_cocher[i].addEventListener('mousedown', function() {
            playMinSound("04.2_CasesAselectionner-AuClic.mp3");
        }, false);
    }

    // sons fleche_jaune
    var sound_fleche_jaune = document.getElementsByClassName('sound_fleche_jaune');
    //console.log("sound_fleche_jaune : " + sound_fleche_jaune.length);
    for (var i = 0; i < sound_fleche_jaune.length; i++) {

        sound_fleche_jaune[i].addEventListener('mouseenter', function() {
            playMinSound("wind.mp3");
        }, false);

        sound_fleche_jaune[i].addEventListener('mousedown', function() {
            playMinSound("05_GlissementFeuille-BoutonJaune.mp3");
        }, false);
    }

    function playMainSound(src) {

        //console.log('playMainSound = ' + src);

        // pour les sons de certaines pages
        mySound_pausePromise = mySound.pause();
        if (mySound_pausePromise !== undefined) {
            mySound_pausePromise.then(_ => {})
                .catch(error => {});
        }
        mySound.src = "../00_GLOBAL/sounds/" + src;
        mySound_playPromise = mySound.play();
        if (mySound_playPromise !== undefined) {
            mySound_playPromise.then(_ => {})
                .catch(error => {});
        }

    }

    function playMinSound(src) {

        //console.log('playMinSound = ' + src);
        // pour les bruitages
        min_Sound_pausePromise = min_Sound.pause();
        if (min_Sound_pausePromise !== undefined) {
            min_Sound_pausePromise.then(_ => {})
                .catch(error => {});
        }
        min_Sound.src = "../00_GLOBAL/sounds/" + src;
        min_Sound_playPromise = min_Sound.play();
        if (min_Sound_playPromise !== undefined) {
            min_Sound_playPromise.then(_ => {})
                .catch(error => {});
        }

    }

    this.playSound = function(src) {

        playMinSound(src);
    };

};
