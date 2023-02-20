let raceCar = document.querySelector('.race-car')
let finish = document.querySelector('.finish-line')
let userCar = document.querySelector(".user-car")
let result = document.querySelector('.result')

setTimeout(() => {
    let looseCar = ()=>{
        let finishX = parseInt(window.getComputedStyle(finish, null).getPropertyValue('left'));
        let raceX = parseInt(window.getComputedStyle(raceCar, null).getPropertyValue('left'));
        let loose = Math.abs(finishX-raceX)
        if(loose<113){
            result.innerHTML='you  loose reload page to play again'
            result.classList.remove('active')
        }

    }
    document.onkeydown = (e)=>{
        let finishX = parseInt(window.getComputedStyle(finish, null).getPropertyValue('left'));
        let carX = parseInt(window.getComputedStyle(userCar, null).getPropertyValue('left'));
        let win = Math.abs(finishX-carX)
        if(e.keyCode==39){
            userCar.style.left = carX + 112 + "px"
        }
        if(win<73){
                document.body.style.overflow='hidden'
            result.innerHTML= "you won reload page to play again"
            result.classList.remove('active')
            raceCar.style.display = 'none'
        } else{
            // result.innerHTML= 'you loose'
            // result.classList.remove('active')
            looseCar();
        }
    }
    raceCar.classList.add('animateCar')
}, 5000);

let countWord = "1"
let count = document.querySelector('.countdown h1')
let countHTML = document.querySelector('.countdown')
console.log(countHTML)
setInterval(() => {
    count.innerHTML = countWord++
}, 1000);
setInterval(() => {
    count.innerHTML = " Go "
},4000);
setInterval(() => {
    countHTML.classList.add('block')
}, 5000);

