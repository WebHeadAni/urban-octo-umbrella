img = "";
Status = "";
function preload(){
img = loadImage("dog_cat.jpg");
}
function setup(){
    canvas = createCanvas(640, 520);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status is detecting objects";
}
function modelLoaded(){
    console.log("Model Loaded");
    Status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results){
    if(error){
        console.log(error);
    }
    console.log(results);
}
function draw(){
    image(img, 0, 0, 640, 520);
    stroke("#7BC2BC");
    fill("#7BC2BC");
    noFill();
    rect(60, 100, 320,500);
    text("dog", 70, 110);
}
