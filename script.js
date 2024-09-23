// your code here
let form = document.getElementById('loginForm');
let urlData = document.getElementById('urlData');

form.addEventListener("submit", (e) => {

	e.preventDefault();

	let name = form.Name.value;
	let year = form.Year.value;

	console.log(name);

	if(name == "")
      urlData.innerText = `https://localhost:8080/?name=${name}`;
	
})