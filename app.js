var btnTranslate = document.querySelector('#btn-translate');
var textInput = document.querySelector('#text-input');
var textOutput = document.querySelector('#text-output');
var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function getTranslatedUrl(text){
    return serverUrl + "?" + "text=" + text
}

function errorHandler(error){
    console.log("error occured  ", error);
    alert("Something wrong happened, Try again later")
}

function clickEventHandler() {
    var input = textInput.value;

    fetch(getTranslatedUrl(input))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        textOutput.innerText = translatedText; 
    })
    .catch(errorHandler)
}


btnTranslate.addEventListener("click", clickEventHandler)


