// FizzBuzz Refactored
// 1) When the page loads, the user should be prompted by a dialog window to supply a number 
// 2) Convert the value the user supplies from a string to a number. 
// 3) Ensure that the user supplied value does not evaluate to NaN. If it does, supply a message telling them to supply a number.

$(document).ready(function() {
  
  // Write one named function that takes an integer as argument, and then counts from 1 to the argument  value
  function fizzbuzz (userAnswer) {
    var count = 0;
    var userAnswer = Number($("#text").val());
    if(userAnswer.length < 0 || userAnswer % 1 !== 0  || userAnswer <= 0){
      alert('Please enter a whole number that is greater than 0');
    }
    for (var i = 1; i <= userAnswer; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        $("#output").append("<p class='entries'>fizz buzz</p>");
      }
      else if (i % 3 == 0) {
        $("#output").append("<p class='entries'>fizz</p>");
      }
      else if  (i % 5 == 0) {
        $("#output").append("<p class='entries'>buzz</p>");
      }
      else {
        count = i;
        $("#output").append("<p class='entries'>" + count + "</p>");
      }
    }
  };

  $("#submit").button()
              .click(function() {
    $("#output").find("p").remove();
    fizzbuzz();
    $("#text").val("");
  });

  $("#reset").button()
             .click(function() {
    $("#text").val("");
  });
  

  
  
  
  
    
});








