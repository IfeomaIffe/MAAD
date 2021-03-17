/*
 * @name Load and Play Sound
 * @description Load sound during preload(). Play a sound when canvas is clicked.
 * <br><br><em><span class="small"> To run this example locally, you will need the
 * <a href="http://p5js.org/reference/#/libraries/p5.sound">p5.sound library</a>
 * a sound file, and a running <a href="https://github.com/processing/p5.js/wiki/Local-server">local server</a>.</span></em>
 */

let song;
var x = 400;
var y = 400;
var d = 100;
var state = false;
let sentence = "EREH!PRESS!";
let sentenceArray = [];
let r = 60;
let theta = 0;

function setup() {
    song = loadSound('Sun-Ra-Springtime-Again.mp3');
    createCanvas(350, 280);
    background(0);
    sentenceArray = sentence.split(""); // splits a string into an array of chars
    print(sentenceArray);
}

function draw() {
    if (state) {
        background(255);
    } else {
        background(255);
    }
    translate(width / 2, height / 2);
    let x = r * cos(theta);
    let y = r * sin(theta);

    for (let i = 0; i < sentenceArray.length; i++) {
        rotate(QUARTER_PI / 1.4);
        text(sentenceArray[i], x, y);
        textSize(45);
    }
}



function mousePressed() {
    if (song.isPlaying(dist(mouseX, mouseY, x, y) < d / 2)) {
        // .isPlaying() returns a boolean
        song.stop();
        state = !state;

    } else {
        song.play();
        state = !state;

    }
}