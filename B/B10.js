
var profilePhoto = document.getElementById("profilePhoto");
var bio = document.getElementById("bio");
var profileName = document.getElementById("name");

function represent_data(data){
	profilePhoto.style.backgroundImage = `url("${data.avatar_url}")`;
	profileName.innerHTML = `${data.name}`;
	bio.innerHTML = `${data.bio}`;	
}

function XML_HTTP(){

var input = document.querySelector("input").value;
var request = new XMLHttpRequest();
request.open('GET', `https://api.github.com/users/${input}`, true);

request.onload = function () {
	var data = JSON.parse(this.response);
	if (request.status >= 200 && request.status < 400) {
		represent_data(data);
	} else {
		console.log('error');
	}
}
request.send();

}

function fetch_API(){

var input = document.querySelector("input").value;
fetch(`https://api.github.com/users/${input}`)
  .then((response) =>response.json() /*function(response) => response.json()*/)
  .then(function(data){
    represent_data(data);  
  })
  .catch(err => console.error(err));

}

function jQuery_AJAX(){

var input = document.querySelector("input").value;
$.ajax({
    url: `https://api.github.com/users/${input}`,
    type: 'GET',
    success: function(data) {
      represent_data(data);
    }
});

}