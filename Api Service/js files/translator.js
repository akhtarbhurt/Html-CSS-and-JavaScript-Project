var options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd30b814906msh3af80411a31f55bp1163a1jsn7d5732e6a0b2',
    'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com'
  }
};

function translation() {
  let txtArea = document.getElementById('txtArea').value
  let txt = document.querySelector('.txts')
  fetch('https://translated-mymemory---translation-memory.p.rapidapi.com/get?langpair=en%7Cur&q=' + txtArea, options)
    .then(response => response.json())
    .then(response => {
      txt.innerHTML = response.responseData.translatedText
    })
    .catch(err => console.error(err));
}
document.querySelector('.txt').addEventListener('input', function (elem) {
  elem = this.value;
  translation();
})



