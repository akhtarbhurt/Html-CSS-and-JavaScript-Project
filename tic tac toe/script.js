let music = new Audio('music.mp3')
let audioTurn = new Audio('ting.mp3');
let gameover = new Audio('gameover.mp3')
let turn = "X"
let isgameover = false;

const changeTurn=  ()=>{
    return turn==='X'? "0":"X"
}

const checkWin = ()=>{
    let boxText = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach((e)=>{
        if((boxText[e[0]].innerHTML === boxText[e[1]].innerHTML) && (boxText[e[2]].innerHTML === boxText[e[1]].innerHTML) && (boxText[e[0]].innerHTML !== " ")){
            document.querySelector('.info').innerHTML = boxText[e[0]].innerHTML + " Won "
            isgameover = true
        }
    })
}

let boxes = document.getElementsByClassName('box')
Array.from(boxes).forEach((element)=>{
    let boxText = element.querySelector('.boxtext')
    element.addEventListener('click', ()=>{
        if(boxText.innerHTML===''){
            boxText.innerHTML = turn;
            turn = changeTurn();
            audioTurn.play()
            checkWin()
            if(!isgameover){
                document.getElementsByClassName('info')[0].innerHTML = "Turn for " + turn;
            }
        }
    })
})
                