// Generate a Random Color

const randomColor = ()=>{
    const  hex = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0;i < 6;i++){
        color += hex[Math.floor(Math.random() * 16)];
    }

    console.log(color);
    return color;
}

let internvalId;
const startChangingColor = ()=> {
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor();
    }
    
    if(!internvalId){
        internvalId = setInterval(changeBgColor,1000);
    }
}

const stopChangingColor = ()=> {
    clearInterval(internvalId);
    internvalId = null;
}

document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);