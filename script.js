/* Video */
var vid;

function setup() {
    createCanvas(1200, 550);
    vid = createVideo("re_2.mp4");
    vid.loop();
    vid.hide();
    vid.volume(0);
    noStroke();
    rectMode(CENTER);
    let canvas = createCanvas(1200, 560);
    canvas.parent('vid');
}

function draw() {
    background(50);
    fill(255);
    vid.loadPixels();
    for (var y = 0; y < height; y += 8) {
        for (var x = 0; x < width; x += 5) {
            var offset = ((y * width) + x) * 4;
            rect(x, y, 10,
                10 * (vid.pixels[offset + 1] / 255));
        }
    }
}


/* */