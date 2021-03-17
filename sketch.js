/*
 * @name Textures
 * @description Images and videos are supported for texture.
 */
// video source: https://vimeo.com/90312869
let vid;
let theta = 0;

function setup() {
    createCanvas(500, 500, WEBGL);

    vid = createVideo([]);
    vid.elt.muted = true;
    vid.loop();
    vid.hide();
}

function draw() {
    background(350);
    translate(-50, -10, 0);
    push();
    rotateZ(theta * mouseX * 0.001);
    rotateX(theta * mouseX * 0.0001);
    rotateY(theta * mouseX * 0.001);
    //pass image as texture
    texture(vid);
    sphere(150);
    pop();
    translate(100, -100, 40);
    push();
    rotateZ(theta * 0.001);
    rotateX(theta * 0.1);
    rotateY(theta * 0.01);
    pop();
    theta += 0.05;


    push();
    rotateZ(theta * mouseX * 0.001);
    rotateX(theta * mouseX * 0.001);
    rotateY(theta * mouseX * 0.0001);
    //pass image as texture
    texture(vid);
    sphere(90);
    pop();
}