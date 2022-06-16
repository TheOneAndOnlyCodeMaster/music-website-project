song1="";
song2="";
leftWristX= 0;
leftWristY= 0;
rightWristY = 0;
rightWristX = 0;
function preload(){
song1 = loadSound("longTime.mp3");
song2 = loadSound("respect.mp3");
}
function setup(){
canvas = createCanvas(400, 400);
canvas.position(650, 250);

video = createCapture(VIDEO);
video.hide();

posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses)
}
function draw(){
image(video, 0, 0, 500, 400);
}
function modelLoaded(){
    console.log('posenet is ready');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("left wrist x = "+leftWristX +" left wrist y = "+ leftWristY);
        console.log("right wrist x = "+rightWristX +" right wrist y = "+ rightWristY);
    }
}