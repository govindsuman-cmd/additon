document.getElementById("addButton").addEventListener("click", function () {
  // Get the input values
  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  // Check if the input is valid
  if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the addition
    var sum = num1 + num2;

    // Display the result
    document.getElementById("result").innerHTML = "Result: " + sum;
  } else {
    // Display an error message if input is not valid
    document.getElementById("result").innerHTML = "Please enter valid numbers";
  }
});
