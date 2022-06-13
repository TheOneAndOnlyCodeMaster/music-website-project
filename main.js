song1="";
song2="";
function preload(){
song1 = loadSound("longTime.mp3");
song2 = loadSound("respect.mp3");
}
function setup(){
canvas = createCanvas(400, 400);
canvas.position(650, 250);

video = createCapture(VIDEO);
video.hide();
}
function draw(){
image(video, 0, 0, 500, 400);
}