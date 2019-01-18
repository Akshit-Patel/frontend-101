
var profilePhoto = document.getElementById("profilePhoto");
var bio = document.getElementById("bio");
var profileName = document.getElementById("name");

function XML_HTTP(){
var input = document.querySelector("input").value;
console.log("HI");
var request = new XMLHttpRequest();

request.open('GET', `https://api.github.com/users/${input}`, true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
   profilePhoto.style.backgroundImage = `url("${data.avatar_url}")`;
   profileName.innerHTML = `${data.name}`;
   bio.innerHTML = `${data.bio}`;
  } else {
    console.log('error');
  }
}

request.send();
}
