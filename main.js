var screenW = window.innerWidth;
var screenH = window.innerHeight;
var screensize = screenW*screenH;

function yourFunction(){
    console.log("screensize = " + screensize);

    setTimeout(yourFunction, 5000);
}

yourFunction();

