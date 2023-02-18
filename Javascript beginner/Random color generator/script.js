let containerEl = document.querySelector('.container');

for (let index = 0; index < 30; index++) {
    let  colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add('color-container');
    containerEl.appendChild(colorContainerEl)
}
let colorContainerEls = document.querySelectorAll(".color-container")



function randomColor(){
    const chars = '123456789abcdef'
    const colorCodeLength = 6
    let colorCode="";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random()* chars.length)
        colorCode += chars.substring(randomNum, randomNum + 1)
    }
    return colorCode
}

function generatColor (){
    colorContainerEls.forEach((colorContainerEl)=>{
        const newColorCode = randomColor();
        colorContainerEl.style.backgroundColor='#'+newColorCode;
        colorContainerEl.innerHTML= "#"+newColorCode;
    })
}
generatColor();