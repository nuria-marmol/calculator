let numberOnScreen = document.querySelector("#screen-numbers");
const deleteKey = document.querySelector(".calculator__keys span:nth-child(4)");
const resetKey = document.querySelector(".calculator__keys span:nth-child(17)");
const calculateKey = document.querySelector(".calculator__keys span:last-child");
const allOtherKeys = document.querySelectorAll(".calculator__keys span:not(span:nth-child(4), span:nth-child(17), span:last-child)");

/**
 * Passing the clicked number or symbol to the screen (div)
 */
function addNumberOrSymbol(event) {
    numberOnScreen.textContent = numberOnScreen.textContent + event.target.textContent;
}

/**
 * Removing the last number or symbol from the screen
 */
function deleteLastNumberOrSymbol() {
    numberOnScreen.textContent = numberOnScreen.textContent.slice(0, numberOnScreen.textContent.length - 1);
}

/**
 * Fully emptying the screen
 */
function clearScreen() {
    numberOnScreen.textContent = "";
}

/**
 * Calculating the desired operation and showing the result
 */
function seeResult() {
    // Converting the string to array
    const screenArray = numberOnScreen.textContent.split("");
    // Changing the symbols that JS cannot operate with
    const arrayWithOperators = screenArray.map(function (element) {
        switch (element) {
            case "x":
                return "*";
                break;
            case ",":
                return ".";
                break;
            default:
                return element;
        }
    })
    // Converting previous array to string again
    const operation = arrayWithOperators.join("");
    // This way JS reads numbers and operators as what they are
    const result = Function("return " + operation);
    // Replacing the dot for a comma
    const backToCommas = result().toString().replace(".", ",")
    numberOnScreen.textContent = backToCommas;
}

// Events
allOtherKeys.forEach(function(element) {
    element.addEventListener("click", addNumberOrSymbol);
})

deleteKey.addEventListener("click", deleteLastNumberOrSymbol);
resetKey.addEventListener("click", clearScreen);
calculateKey.addEventListener("click", seeResult);