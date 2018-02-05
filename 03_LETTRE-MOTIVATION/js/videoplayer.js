var VideoPlayer = function() {

    var myVideo = document.getElementsByTagName('video')[0];
    var myVideo_playPromise;
    var plyrplayer;

    console.log("hello I'm a new Screen_video /  " + myVideo.src );
    config_video();


    function config_video(){
      console.log('config_video');

      // update listeners
      myVideo.addEventListener('canplaythrough', canPlay);
      myVideo.addEventListener('ended', ended);
      myVideo.addEventListener("load", transferComplete);
      myVideo.addEventListener("error", transferFailed);
      myVideo.addEventListener("abort", transferCanceled);

      setTimeout(function() {
          canPlay();
      }, 1000);


      // update video properties
      if (myVideo.getAttribute('data-plyr')) {
          plyrplayer = plyr.setup();
          myVideo.setAttribute('autoplay', '');
          myVideo.volume = 0.5;
      }else{
        var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
        var is_iPad = navigator.userAgent.match(/iPad/i) != null;
        var isIphone = navigator.userAgent.indexOf('iPhone') >= 0;
        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
        if (isIphone || is_iPad || isAndroid || isSafari ) {
            myVideo.volume = 0;
            myVideo.muted = true;
            myVideo.autoplay = true;
            myVideo.setAttribute('muted', '');
            myVideo.setAttribute('playsinline', '');
            myVideo.setAttribute('autoplay', '');
        }else{
          myVideo.volume = 0.5;
          myVideo.setAttribute('playsinline', '');
          myVideo.setAttribute('autoplay', '');
        }
      }

    }

    function justPlay() {
        console.log("just play");
        myVideo_playPromise = myVideo.play();
    }

    /* affichage des interfaces */
    function showUiVideo(uiId) {

        document.getElementById(uiId).style.display = "block";
        setTimeout(function() {
            document.getElementById(uiId).classList.add('active');
        }, 100);
    }

    function hideUiVideo(uiId) {

        if (document.getElementById(uiId)) {
            document.getElementById(uiId).classList.remove('active');
            setTimeout(function() {
                document.getElementById(uiId).style.display = "none";
            }, 100)
        }
    }

    function ended(evt) {

        if(myVideo.id){
            switch (myVideo.id) {

            case 'video1':
                // fin de la vidéo 1 -> on passe à game1a
                Barba.Pjax.goTo("1a_Les_grands_paragraphes.php");
                break;
            case 'video2':
                // fin de la vidéo 2 -> on passe à game2a
                Barba.Pjax.goTo("2a_Se_preparer.php");
                break;
            case 'video3':
                // fin de la vidéo 3 -> on passe à game3a
                Barba.Pjax.goTo("3a_Trouver_la_bonne_formule.php");
                break;
            case 'video4':
                // fin de la vidéo 4 -> on passe à game4a
                Barba.Pjax.goTo("4a_Les-atouts.php");
                break;
            case 'video5':
                setTimeout(function() {
                  Barba.Pjax.goTo("ecran_fin.php");
                }, 2000);
                break;
            case 'video1234':
                setTimeout(function() {
                  Barba.Pjax.goTo("index.php");
                }, 5000);
                break;
            }
        }
    }

    function barbaGoto(url) {
        Barba.Pjax.goTo(url);
    }



    function canPlay(evt) {
        console.log("The canplaythrough is complete.");
        document.getElementsByClassName('page_container')[0].classList.add('page_ready');
        justPlay();
    }

    function transferComplete(evt) {
        console.log("The transfer is complete.");
    }

    function transferFailed(evt) {
        console.log("An error occurred while transferring the file.");
    }

    function transferCanceled(evt) {
        console.log("The transfer has been canceled by the user.");
    }

};
