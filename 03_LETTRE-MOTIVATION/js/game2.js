var Game2 = function() {

    console.log("Hello I'm Game 2");

    /* called for each game2 pages */

    var ul_item = document.getElementsByClassName('qcm_container')[0];
    var li_list = ul_item.getElementsByTagName('li');
    var bt_qcm = document.getElementsByClassName('bt_bc_container')[0];

    for (var i = 0; i < li_list.length; i++) {

        li_list[i].addEventListener('click', function(e) {

            // on active la li cochée
            var isActiveLi = ul_item.querySelector('.active');
            if (isActiveLi) {
                isActiveLi.classList.remove('active');
            }
            e.currentTarget.classList.add('active');

            // on affiche le bouton valider une fois la question cochée
            if (!bt_qcm.classList.contains('active')) {
                bt_qcm.classList.add('active');
            }
        });

    }

    bt_qcm.addEventListener('click',
        function(e) {
            e.preventDefault();

            var reponse = ul_item.querySelector('.active').getAttribute('istrue');
            var id = ul_item.id;

            console.log(id + '///' + reponse);
            switch (id) {
                case 'q1':
                    localStorage.setItem("game2_q1", reponse);
                    break;
                case 'q2':
                    localStorage.setItem("game2_q2", reponse);
                    break;
                case 'q3':
                    localStorage.setItem("game2_q3", reponse);
                    break;
                case 'q4':
                    localStorage.setItem("game2_q4", reponse);
                    break;
                case 'q5':
                    localStorage.setItem("game2_q5", reponse);
                    showPageReponse();
                    break;
            }

        }, false);

    // calcul des résultats
    function showPageReponse() {

        var game2_result = Math.ceil(Number(localStorage.getItem("game2_q1")) + Number(localStorage.getItem("game2_q2")) + Number(localStorage.getItem("game2_q3")) + Number(localStorage.getItem("game2_q4")) + Number(localStorage.getItem("game2_q5")));

        console.log('result : ' + game2_result);
        localStorage.setItem("game2_result", game2_result);
        if (game2_result == 5) {
            location.href = ("2g1_Les_intitules.php");
        } else if (game2_result === 0) {
            location.href = ("2g3_Les_intitules.php");
        } else {
            location.href = ("2g2_Les_intitules.php");
        }
    }

};