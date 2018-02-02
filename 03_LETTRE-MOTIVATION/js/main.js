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

    // on initialise en fonction de la page
    switch (currentPage) {

        case 'game1':
            oo_game = new Game1();
            break;
        case 'game1r':
            showScoreGame1();
            break;
        case 'game3':
            oo_game = new Game3();
            break;
        case 'game4':
            oo_game = new Game4();
            break;
        default:
            break;

    }

    // si on detecte la présence d'une vidéo
    if (document.getElementsByTagName('video').length > 0) {
        // on initialise l'objet video qui fera ce qu'il faut
        oo_page = new VideoPlayer();
    }

};

function showScoreGame1() {

    var showScore = 0;
    var gameResult = 100;
    // loop until showScore == game1_result
    var myInterval = setInterval(function() {
        showScore++;
        if (showScore < gameResult) {
            document.getElementById("showFinalScore").innerHTML = showScore + "%";
        } else {
            clearInterval(myInterval);
            document.getElementById("showFinalScore").innerHTML = gameResult + "%";
        }
    }, 20);

}