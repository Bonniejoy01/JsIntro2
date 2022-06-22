var numOne = parseFloat(window.prompt("Enter a number"));
var numTwo = parseFloat(window.prompt("Enter a second number"));

var operator = window.prompt("Select a math operator: ( - , + , *  and / )")


let result;
if (operator == '+') {
    result = numOne + numTwo;
}
else if (operator == '-') {
    result = numOne - numTwo;
}
else if (operator == '*') {
    result = numOne * numTwo;
}
else {
    result = numOne / numTwo
}

alert(result);
