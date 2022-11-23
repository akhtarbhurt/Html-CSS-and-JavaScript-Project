const ourItemDiv = document.getElementsByClassName('item')
const openIcon = document.getElementsByClassName('iconOpen')
const closeIcon = document.getElementsByClassName('iconClose')

for(let i =0; i<ourItemDiv.length; i++){
    closeIcon[i].style.display='none'
    ourItemDiv[i].addEventListener('click',() =>{
        const result = ourItemDiv[i].classList.toggle('active')
        if(result){
            closeIcon[i].style.display='block'
            openIcon[i].style.display='none'
        } else{
            closeIcon[i].style.display='none'
            openIcon[i].style.display='block'
        }
    })
}