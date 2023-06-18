const allKeys = ["7", "8", "9", "del", "4", "5", "6", "+", "1", "2", "3", "-", ",", "0", "/", "x", "reset", "="];
const keysTemplate = document.querySelector("#keys-template").content.firstElementChild;
// The template target
const calculatorKeys = document.querySelector("#calculator-keys");

/**
 * Creating the keys for the calculator
 */
function createAllKeys() {
    // Transforming "del" and "reset" into uppercase
    const allKeysWithUpperCase = allKeys.map(function (element) {
        if (element.length > 1) {
            return element.toUpperCase();
        } else {
            return element;
        }
    })

    // Passing the array to the target
    allKeysWithUpperCase.forEach(function (key) {
        const templateCopy = keysTemplate.cloneNode(true);
        templateCopy.textContent = key;
        calculatorKeys.appendChild(templateCopy);
    })
}

createAllKeys();