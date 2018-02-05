

$(document).ready(function() {

    newPageReady();

});

var newPageReady = function() {

    init_interaction();

    var oo_page;
    var oo_game;
    var oo_sound = new ConfigSound();

    // on récupère la page courante à partir de data-namespace
    var checkCurrentPage = document.getElementsByClassName('barba-container')[0];
    currentPage = checkCurrentPage.getAttribute("data-namespace");
    console.log(" init page " + currentPage);

    // si on detecte la présence d'une vidéo
    if (document.getElementsByTagName('video').length > 0) {
        // on initialise l'objet video qui fera ce qu'il faut
        oo_page = new VideoPlayer();
    }

    // on initialise en fonction de la page
    switch (currentPage) {

        case 'game1':
            oo_page = new Game1();
            break;
        case 'game1bbis':
            oo_page = new Game1bis();
            break;
        case 'game2b':
            oo_page = new Game2();
            break;
        case 'game3b':
            oo_page = new Game3();
            break;
        case 'game3c':
            showScoreGame3();
            break;
        default:
            break;
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

function init_interaction() {





    // active au click pour la classe 'active_onclick'
    var active_onclick = document.getElementsByTagName('a');
    for (var i = 0; i < active_onclick.length; i++) {
        var link = active_onclick[i];
        link.addEventListener('click', click_target, false);
        // link.addEventListener('mouseover', over_target, false);
        // link.addEventListener('mouseout', out_target, false);
    }

    function click_target(e) {
        var clickedItem = e.currentTarget;
        clickedItem.classList.add('clicked');
        setTimeout(function() {
            clickedItem.classList.remove('clicked');
        }, 1000);
    }

    function over_target(e) {
        var clickedItem = e.currentTarget;
        clickedItem.classList.add('mouseover');
        //setTimeout(function(){ clickedItem.classList.remove('mouseover'); }, 1000);
    }

    function out_target(e) {
        var clickedItem = e.currentTarget;
        clickedItem.classList.remove('mouseover');
    }
}

function showScoreGame3() {

    var showScore = 0;
    var gameResult = 100;
    // loop until showScore == game1_result
    var myInterval = setInterval(function() {
        showScore++;
        if (showScore < gameResult) {
            document.getElementById("showScore").innerHTML = showScore + "%";
        } else {
            clearInterval(myInterval);
            document.getElementById("showScore").innerHTML = gameResult + "%";
        }
    }, 20);

}
