
/*let moveConstUp = document.getElementById("exploreBtnID");


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

*/



//adding ripple to search button
const btn = document.querySelector(".searchButton");
  
    // Listen for click event
    btn.onclick = function (e) {
  
        // Create span element
        let ripple = document.createElement("span");
  
        // Add ripple class to span
        ripple.classList.add("ripple");
  
        // Add span to the button 
        this.appendChild(ripple);
  
        // Get position of X
        let x = e.clientX - e.target.offsetLeft;
  
        // Get position of Y 
        let y = e.clientY - e.target.offsetTop;
  
        // Position the span element
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
  
        // Remove span after 0.3s
        setTimeout(() => {
            ripple.remove();
        }, 6500);
  
    };


//adding some function to the search button
function search() {
    document.getElementById("client_Response").innerText = "our engines are fetching the data. be patient"
}