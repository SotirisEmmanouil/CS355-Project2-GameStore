

let yellowBtn = document.getElementById("buttonChange");
yellowBtn.addEventListener("click",function() { 
    changeBackground(getRandomColor()) });
    
//changes the color of the home page
function changeBackground(color) {
    document.body.style.background = color;
}

//Gets a random color
function getRandomColor(){
    let letters = "0123456789ABCDEF"
    let color = "#"

    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random()*16)];
    }
    return color;
}


