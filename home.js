let yellowBtn = document.getElementById("buttonChange");
yellowBtn.addEventListener("click",function() { 
    changeBackground("yellow") });
    
function changeBackground(color) {
    document.body.style.background = color;
     }