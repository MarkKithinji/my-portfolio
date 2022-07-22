
let moveConstUp = document.getElementById("exploreBtnID");


let explore = document.getElementById("exploreContainer");

var drift = setInterval(move, 90);
var margin = 0;

let l =window.screen.width;
let w =100;

function move() {
    console.log(w);
    if (margin == w) {
        margin = 0 +"px";
    } else {
        explore.style.marginLeft = margin + "px";

    }
    margin +=10;
}


