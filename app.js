var btnTranslate = document.querySelector("#btn-translate");
// btnTranslate.addEventListener("click", function clickEventHandler(){
// console.log("clicked")})
var txtinput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("Something wrong with server! Please try again later.")
}


function clickHandler() {
    var inputText = txtinput.value;
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
    
};

btnTranslate.addEventListener('click', clickHandler)