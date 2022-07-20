

function operateCorausel() {
    var director = document.getElementById("imagelinks");
    if (director.style.display === "none") {
        director.style.display = "block";
    }
    else{
        director.style.display = "none";
    }
}
    

/*document.querySelectorAll(".imageCorausel").forEach(imagecorausel => {

    const items = imagecorausel.querySelectorAll("#corausel");
    const buttonsHTML = Array.from(items, () =>{
        return '<class="corausel__button">'
    });
    imagecorausel.insertAdjacentHTML("beforeend", 
    '<div class="corausel__button">${ buttonsHTML.join("")}</div>');

    const buttons = imagecorausel.querySelectorAll(".carousel__button");
    buttons.forEach((button, i) => {
        button.addEventListener("click", () =>{
            items.forEach(item.classList.remove("corausel--selected"));
            buttons.forEach(button => button.classList.remove("corausel__button--selected"))
        });
    })

    console.log(buttonsHTML)
});
*/

function selfDissapear() {
    var director = document.getElementById("imagelinks");
    if (director.style.display === "none") {
        director.style.display = "block";
    }
    else{
        director.style.display = "none";
    }   
}



function aboutMeAppear() {
   var abtme = document.getElementById("aboutMeText");
    if (abtme.style.display === "none") {
        abtme.style.display = "block";
    }
    else{
        abtme.style.display = "none";
    }   
    
}

var abtme = document.getElementById("discussionButton");

    abtme.addEventListener("click", aboutMeAppear);
    abtme.addEventListener("click", selfDissapear);
    
/*function trial() {
    var director = document.getElementById("imagelinks");
    if (director.style.display === "none") {
        director.style.display = "block";
    }
    else{
        director.style.display = "none";
    }   
}
*/

function aboutMeDissappear() {
    
    if (abtme.style.display === "none") {
        abtme.style.display = "block";
    }
    else{
        abtme.style.display = "none";
    }   
    
}

/*creating the project(raspberry) button*/
var projectTxt = document.getElementById("myProjects");

function projectsAppear() {
    if (projectTxt.style.display === "none") {
        projectTxt.style.display = "block";

    }
    else{
        projectTxt.style.display = "none";
    }
}

var projectsButton = document.getElementById("raspberry-overlay-button");
    projectsButton.addEventListener("click", projectsAppear);
    projectsButton.addEventListener("click", selfDissapear)
