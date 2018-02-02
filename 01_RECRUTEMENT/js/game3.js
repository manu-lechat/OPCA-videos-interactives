var Game3 = function() {

    console.log("Hello I'm Game 3");
    var OneMore = 0;

    function setOneMore() {
        OneMore++;
        if (OneMore >= 5) {
            console.log("so what : " + OneMore);
            var bt_valider = document.querySelector('.game3b .bt_valider');
            bt_valider.classList.add("actif");
        }
        console.log("OneMore : " + OneMore);
    }

    $(function() {

        function configDragAndDrop(dragClass, dropCLass, goX, goY) {

            var oo_sound = new ConfigSound();
            // on définit l'item draggable
            $("." + dragClass).draggable({
                start: function(event, ui) {
                    oo_sound.playSound('07.1_SelectionEtiquette-AuClic.mp3');
                },
                revert: true
            });
            var dragItem = $("." + dragClass);

            // on définit l'item droppable
            $("." + dropCLass).droppable({
                drop: function(event, ui) {
                    var dragObj = ui.draggable[0];
                    var dropObj = event.target;
                    dropObj.classList.remove("dropGreen");
                    dropObj.classList.remove("dropRed");
                    if (dragObj.classList.contains(dragClass)) {
                        setOneMore();
                        dragItem.draggable({
                            revert: 'invalid'
                        });
                        dragItem.draggable("disable");
                        dragItem.css("top", goX);
                        dragItem.css("left", goY);
                        dropObj.classList.add("dropWhite");

                        oo_sound.playSound('07.3_RelachementEtiquette-SonPositif.mp3');
                    } else {

                        oo_sound.playSound('07.2_RelachementEtiquette-SonNegatif.mp3');
                    }
                },
                over: function(event, ui) {
                    var dragObj = ui.draggable[0];
                    var dropObj = event.target;
                    if (dragObj.classList.contains(dragClass)) {
                        dropObj.classList.add("dropGreen");
                    } else {
                        dropObj.classList.add("dropRed");
                    }
                },
                out: function(event, ui) {
                    var dropObj = event.target;
                    dropObj.classList.remove("dropGreen");
                    dropObj.classList.remove("dropRed");
                }
            });

        }

        // init des 5 zones drag , drop, final position
        configDragAndDrop('game3b_item2', 'game3b_item_zone1', '15%', '60%');
        configDragAndDrop('game3b_item4', 'game3b_item_zone2', '30%', '60%');
        configDragAndDrop('game3b_item5', 'game3b_item_zone3', '45%', '60%');
        configDragAndDrop('game3b_item1', 'game3b_item_zone4', '60%', '60%');
        configDragAndDrop('game3b_item3', 'game3b_item_zone5', '75%', '60%');

    });

};