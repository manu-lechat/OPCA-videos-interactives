$(document).ready(function() {

    newPageReady();

});

var newPageReady = function() {

    var oo_page;
    var oo_game;
    var oo_sound = new ConfigSound();

    // on récupère la page courante à partir de data-namespace
    var checkCurrentPage = document.getElementsByClassName('barba-container')[0];
    currentPage = checkCurrentPage.getAttribute("data-namespace");
    console.log("## newPageReady " + currentPage);

    // si on detecte la présence d'une vidéo
    if (document.getElementsByTagName('video').length > 0) {
        // on initialise l'objet video qui fera ce qu'il faut
        oo_page = new VideoPlayer();
    }

    // on initialise en fonction de la page
    switch (currentPage) {

        case 'game2':
            oo_game = new Game2();
            break;
        case 'game3':
            oo_game = new Game3();
            break;
        default:
            break;

    }

};