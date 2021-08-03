function preload(){}
function setup(){
    Canvas = createCanvas(900, 700);
    Video = createCapture(VIDEO);
    Video.hide();
}
function draw(){
    image(Video, 250, 150, 500, 400);
    fill(255, 30, 0);
    stroke(255, 30, 0);
    circle(50, 50, 50);
    rect(70, 40, 800, 20);
    circle(850, 50, 50);
    rect(40, 40, 20, 600);
    circle(850, 650, 50);
    rect(840, 40, 20, 600);
    circle(50, 650, 50);
    rect(70, 640, 800, 20);
}

function snap(){
    save('Image.png');
}