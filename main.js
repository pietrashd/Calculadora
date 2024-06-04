const result = document.querySelector('.display')
function appendCharacter(char) {
   if(result.innerText == '0' && char != ','){
       result.innerText = char
   } else {
       if(!(char == ',' && result.innerText[result.innerText.length - 1] == ',')) {
           result.innerText += char
       }
   }
}
function clearDisplay() {
   result.innerText = '0'
}
function calculateResult() {
   result.innerText = eval(result.innerText)
}