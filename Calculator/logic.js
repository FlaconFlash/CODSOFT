let displayValue = '0'; 
let isNewOperation = true; 

function appendToDisplay(value) {
    if (isNewOperation) {
        displayValue = value;
        isNewOperation = false;
    } else {
        if (displayValue === '0') {
            displayValue = value;
        } else {
            displayValue += value;
        }
    }
    document.getElementById('display').textContent = displayValue;
}

function calculateResult() {
    try {
        const result = eval(displayValue);
        document.getElementById('display').textContent = result;
        displayValue = result.toString();
        isNewOperation = true;
    } catch (error) {
        document.getElementById('display').textContent = 'Error';
        displayValue = '0';
        isNewOperation = true;
}
}
