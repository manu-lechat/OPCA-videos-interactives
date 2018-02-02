var Game1 = function() {

    console.log("Hello I'm Game 1 !!");
    var OneMore = 0;

    function setOneMore() {
        OneMore++;
        if (OneMore >= 10) {
            console.log("so what : " + OneMore);
            var bt_valider = document.querySelector('.game1b .bt_container');
            bt_valider.classList.add("actif");
        }
        console.log("OneMore : " + OneMore);
    }

    $(function() {

        function configDragAndDrop(dragClass, dropCLass) {

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
                        dragItem.css("display", 'none');
                        dropObj.classList.add("txt");

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

        // init des 10 zones drag , drop
        configDragAndDrop('game1b_item7', 'game1b_item_zone1');
        configDragAndDrop('game1b_item3', 'game1b_item_zone2');
        configDragAndDrop('game1b_item2', 'game1b_item_zone3');
        configDragAndDrop('game1b_item4', 'game1b_item_zone4');
        configDragAndDrop('game1b_item9', 'game1b_item_zone5');
        configDragAndDrop('game1b_item5', 'game1b_item_zone6');
        configDragAndDrop('game1b_item10', 'game1b_item_zone7');
        configDragAndDrop('game1b_item6', 'game1b_item_zone8');
        configDragAndDrop('game1b_item8', 'game1b_item_zone9');
        configDragAndDrop('game1b_item1', 'game1b_item_zone10');

    });

};