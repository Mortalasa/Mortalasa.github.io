// calculator.js
// Assignment 3: Simple JavaScript Calculator

// Start the main results table
document.write("<h2>Calculation Results</h2>");
document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

// Store only VALID numeric results for summary stats
let validResults = [];

while (true) {
  // Prompt for x
  let xInput = prompt("Enter the first number (x):");
  if (xInput === null) break; // Cancel exits loop

  // Prompt for operator
  let operator = prompt("Enter an operator (+, -, *, /, %):");
  if (operator === null) break;

  // Prompt for y
  let yInput = prompt("Enter the second number (y):");
  if (yInput === null) break;

  // Convert to numbers
  let x = Number(xInput);
  let y = Number(yInput);

  let resultText = "";
  let isValid = true;
  let computedValue = null;

  // Validate numbers
  if (isNaN(x) || isNaN(y)) {
    resultText = "Error: invalid number input";
    isValid = false;
  } else {
    // Validate operator and compute
    switch (operator) {
      case "+":
        computedValue = x + y;
        break;
      case "-":
        computedValue = x - y;
        break;
      case "*":
        computedValue = x * y;
        break;
      case "/":
        // You can decide how to treat divide by 0 (here: error)
        if (y === 0) {
          resultText = "Error: division by zero";
          isValid = false;
        } else {
          computedValue = x / y;
        }
        break;
      case "%":
        // Mod by 0 is also not valid
        if (y === 0) {
          resultText = "Error: modulus by zero";
          isValid = false;
        } else {
          computedValue = x % y;
        }
        break;
      default:
        resultText = "Error: invalid operator";
        isValid = false;
    }
  }

  // If valid, set resultText and store for summary
  if (isValid) {
    resultText = computedValue;
    validResults.push(computedValue);
  }

  // Add row to table (show what user typed for x/y, not the converted number)
  document.write(
    "<tr><td>" + xInput + "</td><td>" + operator + "</td><td>" + yInput + "</td><td>" + resultText + "</td></tr>"
  );
}

// Close main results table
document.write("</table>");

// Build summary table after loop ends
document.write("<h2>Summary (Valid Results Only)</h2>");
document.write("<table>");
document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");

if (validResults.length === 0) {
  document.write("<tr><td colspan='4'>No valid results to summarize.</td></tr>");
} else {
  let total = 0;
  let min = validResults[0];
  let max = validResults[0];

  for (let i = 0; i < validResults.length; i++) {
    let val = validResults[i];
    total += val;
    if (val < min) min = val;
    if (val > max) max = val;
  }

  let avg = total / validResults.length;

  document.write(
    "<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>"
  );
}

document.write("</table>");
