$(document).ready(function() {

    newPageReady();

});
var newPageReady = function() {

    var oo_page = null;
    var oo_game = null;
    oo_sound = new ConfigSound();

    // on récupère la page courante à partir de data-namespacex
    var checkCurrentPage = document.getElementsByClassName('barba-container')[0];
    currentPage = checkCurrentPage.getAttribute("data-namespace");
    console.log("## newPageReady " + currentPage);

    // on initialise en fonction de la page
    switch (currentPage) {

        case 'game2':
            oo_game = new Game2();
            setup();
            break;
        case 'game2r':
            showScore100pc();
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

    
    //****** Hack for unmute video *******//
    // detection des clicks sur les boutons pour lancer les vidéos
    var a_onclick = document.getElementsByTagName('a');
    for (var i = 0; i < a_onclick.length; i++) {
        a_onclick[i].addEventListener('click', function(e){

          setTimeout(function(e) {
            UnMuteVideo(e);
          }, 800);
        }, false);
    }

    function UnMuteVideo(e){
      console.log("#### UnMuteVideo function found " + document.getElementsByTagName('video').length + " video");
      if (document.getElementsByTagName('video').length > 0) {
        var myVideo = document.getElementsByTagName('video')[0];
        console.log("#### myVideo.currentTime" + myVideo.currentTime);
        if(myVideo.currentTime > 0 && !myVideo.paused && !myVideo.ended && myVideo.readyState > 2){
          console.log("#### video playing");
          if (  myVideo.hasAttribute('muted')) {
            console.log('#### remove attribute muted');
            myVideo.muted = false;
            myVideo.removeAttribute("muted");
            myVideo.volume = 0.5;
          }
        }else{
          console.log("#### play and loop");
          myVideo.play();
          setTimeout(function(e) {
            UnMuteVideo(e);
          }, 200);
        }
      }
    }
    //****** /Hack for unmute video *******//


};

function showScore100pc() {

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
