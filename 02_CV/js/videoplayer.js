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


    function ended(evt) {
        if(myVideo.id){
          switch (myVideo.id) {

              case 'video1':
                  // fin de la vidéo 1 -> on passe à game1a
                  location.href = ("1a_Un_cv_reussi.php");
                  break;
              case 'video2':
                  // fin de la vidéo 2 -> on passe à game2a
                  location.href = ("2a_Les_intitules.php");
                  break;
              case 'video3':
                  // fin de la vidéo 3 -> on passe à game3a
                  location.href = ("3a_Les_erreurs_du_CV.php");
                  break;
              case 'video4':
                  setTimeout(function() {
                      location.href = ("ecran_fin.php");
                  }, 2000);
                  break;
              case 'video1234':
                  setTimeout(function() {
                      location.href = ("index.php");
                  }, 4000);
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
