var options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd30b814906msh3af80411a31f55bp1163a1jsn7d5732e6a0b2',
      'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com'
    }
  };
  
  let getSong = ()=>{
    let songInput = document.getElementById('songInput').value;
    fetch('https://genius-song-lyrics1.p.rapidapi.com/search/?q='+ songInput, options)
    .then(response => response.json())
    .then(response => {
      console.log(response)
      let img = document.getElementById('img')
      img.className = "img-fluid", 'img';
      for(let key in response){
        img.src =  response[key][0].result.header_image_url
        document.getElementById('artistName').innerHTML = response[key][0].result.artist_names
        document.getElementById('title').innerHTML = response[key][0].result.full_title
        document.getElementById('path').innerHTML = response[key][0].result.path
        document.getElementById('release').innerHTML = response[key][0].result.release_date_for_display
      }
      
    })
    .catch(err => console.error(err));
  }
  document.getElementById('btn').addEventListener('click', ()=>{
    getSong();
  })