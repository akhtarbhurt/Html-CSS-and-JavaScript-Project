const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd30b814906msh3af80411a31f55bp1163a1jsn7d5732e6a0b2',
		'X-RapidAPI-Host': 'blog-introduction.p.rapidapi.com'
	}
};

let getBlog = ()=>{
    let input = document.getElementById('input').value;
    fetch('https://blog-introduction.p.rapidapi.com/blog-intro?topic=.' + input, options)
	.then(response => response.json())
	.then(response => {
        console.log(response)
        document.getElementById('para').innerHTML = response[0]
    })
	.catch(err => console.error(err));
}
document.getElementById('btn').addEventListener('click', ()=>{
    getBlog(); 
    alert('its working')
})