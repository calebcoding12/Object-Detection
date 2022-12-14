img="";
status1="";
function preload(){
    img = loadImage("Kitchen.jpg");
}
function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}
function draw(){
    image(img, 0,0, 640,420)
}
function modelLoaded(){
    status1 = true;
    console.log("Model is loaded");
    objectDetector.detect(img, gotResults);
}
function gotResults(error, results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
    }
}
function home(){
    window.location = "index.html"
}