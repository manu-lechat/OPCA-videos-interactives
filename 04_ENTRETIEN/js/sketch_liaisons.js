console.log('sketch liaisons');

var allLignes = [];
var allPucesG = [];
var allPucesD = [];

var activeLigne = "";
var nb_fixed = 0;

function Ligne(x, y, endX, endY) {

    this.startXy = new p5.Vector(x, y);
    this.currentXy = new p5.Vector(150, 150);
    this.endXy = new p5.Vector(endX, endY);
    this.isFixed = false;
    this.isLiving = false;

}

function PuceG(x, y, id) {

    this.posXy = new p5.Vector(150, 150);
    this.isFixed = false;

    this.div = createDiv("");
    this.div.parent('sketch_container');
    this.div.class('puceG puceG' + id);
    this.div.mousePressed(function() {
        live_ligne(id);
        clignotte_puceD(id);
    });
    this.div.mouseOver(function() {
        isLiving_None();
    });

    this.greenIt = function() {
        this.div.addClass('green');
    };

}

function clignotte_puceD(id_divG){

  for (var i = allPucesD.length - 1; i >= 0; i--) {
    if (allPucesD[i].div.isFixed) {
      allPucesD[i].div.addClass('green');
    }else{
      allPucesD[i].div.removeClass('green');
      allPucesD[i].div.removeClass('red');
    }
    if (allPucesD[i].goodLineId == id_divG) {
        allPucesD[i].div.addClass('green');
    }
  };
}

function PuceD(x, y, id, goodLineId) {

    this.goodLineId = goodLineId;
    this.id = id;
    this.div = createDiv("");
    this.div.parent('sketch_container');
    this.div.class('puceD puceD' + id);
    this.isFixed = false;
    this.div.mousePressed(function() {
        testTarget(this, goodLineId);
    });
    this.div.mouseOver(function() {
        PuceOver(this, goodLineId);
    });
    this.div.mouseOut(function() {
        PuceOut(this);
    });
}



function setup() {

    var width =  document.body.clientWidth;
   var height = Math.round(width * 0.5625);
    console.log(width+ " / " + height);

    if(document.getElementById('sketch_container')){

        var canvas = createCanvas(1920, 1080);

        canvas.parent('sketch_container');

        allLignes = [];
        allLignes.push(new Ligne(750, 280, 975, 817));
        allLignes.push(new Ligne(750, 405, 975, 405));
        allLignes.push(new Ligne(750, 546, 975, 685));
        allLignes.push(new Ligne(750, 685, 975, 280));
        allLignes.push(new Ligne(750, 817, 975, 546));

        allPucesG = [];
        allPucesG.push(new PuceG(450, 50, 0));
        allPucesG.push(new PuceG(450, 150, 1));
        allPucesG.push(new PuceG(450, 250, 2));
        allPucesG.push(new PuceG(450, 350, 3));
        allPucesG.push(new PuceG(450, 450, 4));

        allPucesD = [];
        allPucesD.push(new PuceD(650, 50, 0, 3));
        allPucesD.push(new PuceD(650, 150, 1, 1));
        allPucesD.push(new PuceD(650, 250, 2, 4));
        allPucesD.push(new PuceD(650, 350, 3, 2));
        allPucesD.push(new PuceD(650, 450, 4, 0));

    }

}

/* actions sur puces G */

function live_ligne(i) {

    isLiving_None();
    activeLigne = i;
    console.log('activeLigne : ' + activeLigne);
    allLignes[i].isLiving = true;
}

function isLiving_None() {

    for (var i = 0; i < allLignes.length; i++) {
        allLignes[i].isLiving = false;
    }
}

/* actions sur puces D */

function testTarget(target, goodLineId) {

    if (activeLigne == goodLineId) {
        allLignes[goodLineId].isFixed = true;
        target.isFixed = true;
        target.addClass('green');
        allPucesG[goodLineId].greenIt();
        oo_sound.playSound('07.3_RelachementEtiquette-SonPositif.mp3');
        nb_fixed++;
        if (nb_fixed == 5) {
            gameIsOver();
        }
    } else {
        oo_sound.playSound('07.2_RelachementEtiquette-SonNegatif.mp3');
    }
    isLiving_None();
    activeLigne = 111;

}

function gameIsOver() {

    var bt_bd_container = document.getElementsByClassName('bt_bd_container')[0];
    bt_bd_container.classList.add('actif');
}

function PuceOver(target, goodLineId) {

    if (!target.isFixed) {
        if (activeLigne == goodLineId) {
            target.addClass('green');
        } else {
            target.addClass('red');
            target.removeClass('green');
        }
    }
}

function PuceOut(target) {

    if (!target.isFixed) {
        target.removeClass('green');
        target.removeClass('red');
    }
}

function draw() {

    if(document.getElementById('sketch_container')){
        clear();
        ellipse(mouseX, mouseY, 5, 5);
        noFill();
        stroke('#4e96b3');
        strokeWeight(4);
        for (var i = 0; i < allLignes.length; i++) {
            // update currentXy of active Line
            if (allLignes[i].isFixed) {
                allLignes[i].currentXy = new p5.Vector(allLignes[i].endXy.x, allLignes[i].endXy.y);
            } else if (allLignes[i].isLiving) {
                allLignes[i].currentXy = new p5.Vector(mouseX, mouseY);
            } else {
                allLignes[i].currentXy = new p5.Vector(allLignes[i].startXy.x, allLignes[i].startXy.y);
            }
            // draw lines
            line(allLignes[i].startXy.x, allLignes[i].startXy.y, allLignes[i].currentXy.x, allLignes[i].currentXy.y);
            // ellipse(allLignes[i].startXy.x, allLignes[i].startXy.y, 20);
            // ellipse(allLignes[i].endXy.x, allLignes[i].endXy.y, 20);
        }
    }

}
