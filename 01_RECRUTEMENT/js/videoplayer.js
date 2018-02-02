var VideoPlayer = function() {

    var myVideo = document.getElementsByTagName('video')[0];
    var myVideo_playPromise;
    var plyrplayer;
    var myVideoTimer = 0;

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


    if(myVideo.id){
      switch (myVideo.id) {
        case 'video1':
      break;
        case 'video2':
        myVideo.addEventListener("progress", updateProgress);
        myVideo.addEventListener("timeupdate", updateProgress);
        myVideo.addEventListener("seeked", updateProgress);

        break;
      case 'video3':
      break;
        case 'video4':
        myVideo.addEventListener("progress", updateProgress);
        myVideo.addEventListener("timeupdate", updateProgress);
        myVideo.addEventListener("seeked", updateProgress);
      break;
      case 'video1234':
      break;
      }
    }


    /* updtae progress */
    function updateProgress(oEvent) {

      myVideoTimer = Math.ceil(myVideo.currentTime);
      if(myVideo.id){
          switch (myVideo.id) {


            case 'video2':
                // config de l'apparition des ui de la video4
                if (myVideoTimer > 10 && myVideoTimer < 21) {
                    showUiVideo("video2_ui1");
                } else {
                    hideUiVideo("video2_ui1");
                }
                break;
            case 'video4':
                // config de l'apparition des ui de la video4
                if (myVideoTimer > 4 && myVideoTimer < 12) {
                    showUiVideo("video4_ui1");
                } else {
                    hideUiVideo("video4_ui1");
                }
                if (myVideoTimer > 15 && myVideoTimer < 22) {
                    showUiVideo("video4_ui2");
                } else {
                    hideUiVideo("video4_ui2");
                }
                if (myVideoTimer > 22) {
                    showUiVideo("video4_ui3");
                } else {
                    hideUiVideo("video4_ui3");
                }
                break;
        }
        }
    }

    /* gestion des fins des vidéos */
    function ended(evt) {

        videoIsEnded = true;
        myVideo.classList.add('video_ended');
        if(myVideo.id){
            switch (myVideo.id) {

            case 'video1':
                // fin de la vidéo 1 -> on passe à game1a
                barbaGoto("1a_Rediger_l_annonce.php");
                break;
            case 'video2':
                // fin de la vidéo 2 -> on passe à game2a
                barbaGoto("2a_Test_du_recruteur.php");
                break;
            case 'video3':
                // fin de la vidéo 3 -> on passe à game3a
                barbaGoto("3a_Une_bonne_integration.php");
                break;
            case 'video4':
                setTimeout(function() {
                    barbaGoto("index.php");
                }, 8000);
                break;
            case 'video1234':
                setTimeout(function() {
                    barbaGoto("index.php");
                }, 5000);
                break;
        }
        }
    }

    // on detecte le click sur video_ui pour mettre en pause la vidéo
    video_ui_list = document.getElementsByClassName('video_ui');
    if (video_ui_list.length > 0) {
        for (var i = 0; i < video_ui_list.length; i++) {
            video_ui_list[i].addEventListener('click', playpause, false);
        }
    }

    function playpause() {
        if (!videoIsEnded) {
            if (myVideo.paused) {
                myVideo_playPromise = myVideo.play();
            } else {
                myVideo_playPromise = myVideo.pause();
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
