//  https://teachablemachine.withgoogle.com/models/3VR2eFxi0/model.json
Webcam.set({
width: 350,
height: 300,
image_format:"png",
png_quality: 100 
})
camera=document.getElementById("camera")
Webcam.attach("#camera")

function take_snapshot(){
Webcam.snap(function(data_uri){
result=document.getElementById("result").innerHTML= "<img id='capture_image' src='"+data_uri+"'/>"
})
}

console.log("ml5 version: ",ml5.version)
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3VR2eFxi0/model.json",modelLoaded)

function modelLoaded(){
console.log("modelLoaded")
}





