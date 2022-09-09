var userInput = document.querySelector("#input")
var button = document.querySelector("#btn")
var outputText = document.querySelector("#output")
//var api = "https://unitube-server.herokuapp.com/playlists"
//var api = "https://jsonplaceholder.typicode.com/dummyUsers"
var api="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"



function url(text) {
  return api + "?text=" + text;
}

button.addEventListener("click", loading)

function loading() {
  var outputData = userInput.value
  fetch(url(outputData))
    .then(response => {
      if(response.status===401){
        console.log("You are not logged in")
      }else if(response.status===404) {
        console.log("Page not found")
      }else if(response.status===200){
        console.log("Good to load page")
      }
    })


  //outputText.innerText=outputData
}