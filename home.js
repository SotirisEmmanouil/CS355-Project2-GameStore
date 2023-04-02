

let yellowBtn = document.getElementById("buttonChange");
yellowBtn.addEventListener("click",function() { 
    changeBackground("yellow") });
    
                                        //changes the color of the home page
function changeBackground(color) {
    document.body.style.background = color;
}


