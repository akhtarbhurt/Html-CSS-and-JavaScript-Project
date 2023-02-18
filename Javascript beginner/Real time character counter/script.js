let textareaEl = document.getElementById('textarea');
let totalCounterEl = document.getElementById('total-counter');
let remainingCounterEl = document.getElementById('remaining-counter');

function updateConter(){
   totalCounterEl.innerText = textareaEl.value.length;
   remainingCounterEl.innerText = textareaEl.getAttribute('maxLength') - textareaEl.value.length;

}
textareaEl.addEventListener('input', function (){
    updateConter();
})