const Blur = document.querySelector('.contact')

let load = 0
let int = setInterval(blurring, 15)

function blurring(){
    load++

    if(load > 99){
        clearInterval(int)
    }
   
    Blur.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }
