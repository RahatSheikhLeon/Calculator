
// Function to perform operation
function performOperation(operation) {
    let numberOne = parseFloat(document.getElementById('numberOne').value);
    let numberTwo = parseFloat(document.getElementById('numberTwo').value);

    let result;
    switch (operation) {
        case 'add':
            result = numberOne + numberTwo;
            break;
        case 'subtract':
            result = numberOne - numberTwo;
            break;
        case 'multiply':
            result = numberOne * numberTwo;
            break;
        case 'divide':
            result = numberOne / numberTwo;
            break;
    }
    document.getElementById('result').innerHTML = result;
}

// Add event listeners for buttons
document.getElementById('add').addEventListener('click', function() {
    performOperation('add');
});

document.getElementById('subtract').addEventListener('click', function() {
    performOperation('subtract');
});

document.getElementById('multiply').addEventListener('click', function() {
    performOperation('multiply');
});

document.getElementById('divide').addEventListener('click', function() {
    performOperation('divide');
});
