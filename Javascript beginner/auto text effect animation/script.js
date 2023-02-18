const containerEl = document.querySelector('.container');
const careers = ['youtuber', 'web developer', 'freelancer', 'instructor'];

let careersIndex = 0;
let characterIndex = 0;

function update(){
    characterIndex++
    containerEl.innerHTML= ` <h1>I am a ${careers[careersIndex].slice(0, characterIndex)} </h1> `
    if(characterIndex=== careers[careersIndex].length){
        careersIndex++
        characterIndex = 0
    }
    setTimeout(update, 400)
}
update();