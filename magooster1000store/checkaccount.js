var app_div = document.getElementById("AppDiv");
app_div.style.display = "none";
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const token = urlParams.get('token')
console.log("Token: " + token)
