var VideoPlayer = function() {

        console.log("hello I'm a new Screen_video");

        var myVideo = document.getElementsByTagName('video')[0];
        var myVideoId = myVideo.id;
        var myVideoTimer = 0;
        var videoIsEnded = false;
        var myVideo_pausePromise;
        var myVideo_playPromise;
        var plyrplayer;

        // init Plyr
        if (myVideo.getAttribute('data-plyr')) {
            instances = plyr.setup();
        }

        // update video properties
        myVideo.setAttribute('playsinline', '');
        myVideo.setAttribute('autoplay', '');
        var is_iPad = navigator.userAgent.match(/iPad/i) != null;
        var isIphone = navigator.userAgent.indexOf('iPhone') >= 0;
        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");
        if (isIphone || is_iPad || isAndroid) {
            myVideo.volume = 0;
            myVideo.muted = true;
            myVideo.autoplay = true;
            myVideo.setAttribute('muted', '');

        } else {
            myVideo.muted = false;
            myVideo.volume = 0.5;
        }
        if (myVideo.getAttribute('data-plyr')) {
            myVideo.muted = false;
            myVideo.volume = 0.5;
            myVideo.removeAttribute('muted', '');
        }

    // update listeners
    switch (myVideoId) {
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
    myVideo.addEventListener('canplaythrough', justPlay);
    myVideo.addEventListener('ended', ended);

    justPlay();

    function justPlay() {
        console.log("just play");
        myVideo_playPromise = myVideo.play();
    }

    /* updtae progress */
    function updateProgress(oEvent) {

        myVideoTimer = Math.ceil(myVideo.currentTime);
        //myVideoTimer = Math.ceil(plyrplayer[0].getCurrentTime());
        console.log(myVideoId + "/" + myVideoTimer);
        switch (myVideoId) {

            case 'video2':
                // config de l'apparition des ui de la video4
                if (myVideoTimer > 10 && myVideoTimer < 21) {
                    showUiVideo("video2_ui1");
                    console.log("ogog");
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

    /* gestion des fins des vidéos */
    function ended(evt) {

        videoIsEnded = true;
        myVideo.classList.add('video_ended');
        console.log('The End ' + myVideoId);

        switch (myVideoId) {

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

    function barbaGoto(url) {
        Barba.Pjax.goTo(url);
    }

};