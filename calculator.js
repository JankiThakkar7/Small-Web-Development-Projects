document.addEventListener("DOMContentLoaded", function () {
    let displayVal = "";
  
    // Function to update the display
    function updateDisplay() {
      document.getElementById("display").value = displayVal;
    }
  
    // Click event for number and operator buttons
    const operatorButtons = document.querySelectorAll(".operator");
    operatorButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const value = button.getAttribute("data-value");
        displayVal += value;
        updateDisplay();
      });
    });
  
    // Click event for equal button
    document.getElementById("equal-btn").addEventListener("click", function () {
      try {
        displayVal = eval(displayVal).toString();
        updateDisplay();
      } catch (error) {
        displayVal = "Error";
        updateDisplay();
      }
    });
  
    // Click event for clear button
    document.getElementById("clear-btn").addEventListener("click", function () {
      displayVal = "";
      updateDisplay();
    });
  });
  