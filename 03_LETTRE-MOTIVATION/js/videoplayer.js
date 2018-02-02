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

    myVideo.addEventListener('canplaythrough', justPlay);
    myVideo.addEventListener('ended', ended);

    justPlay();

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

        videoIsEnded = true;
        myVideo.classList.add('video_ended');
        console.log('end' + myVideoId);
        switch (myVideoId) {

            case 'video1':
                // fin de la vidéo 1 -> on passe à game1a
                location.href = ("1a_Les_grands_paragraphes.php");
                break;
            case 'video2':
                // fin de la vidéo 2 -> on passe à game2a
                location.href = ("2a_Se_preparer.php");
                break;
            case 'video3':
                // fin de la vidéo 3 -> on passe à game3a
                location.href = ("3a_Trouver_la_bonne_formule.php");
                break;
            case 'video4':
                // fin de la vidéo 4 -> on passe à game4a
                location.href = ("4a_Les-atouts.php");
                break;
            case 'video5':
                setTimeout(function() {
                    location.href = ("ecran_fin.php");
                }, 2000);
                break;
            case 'video1234':
                setTimeout(function() {
                    location.href = ("index.php");
                }, 5000);
                break;
        }
    }

    function barbaGoto(url) {
        Barba.Pjax.goTo(url);
    }

};