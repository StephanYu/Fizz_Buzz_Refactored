$(document).ready(function(){

  var fizzBuzz = function(num){
    var num = $('input').val();
    if(num.length < 0 || num % 1 !== 0  || num <= 0){
      alert('Please enter a whole number that is greater than 0')
    }
    for (i = 1; i <= num; i++){
      if (i % 3 == 0 && i % 5 == 0){
        $('body').append('<p>FizzBuzz</p>')
      } else if (i % 3 == 0) {
        $('body').append('<p>Fizz</p>') 
      } else if (i % 5 == 0) {
        $('body').append('<p>Buzz</p>') 
      } else {
        $('body').append('<p>'+ i + '</p>')
      };
    };
  };

  
  $('input').on('keydown', function(e){   
    if (e.keyCode == 13){
      $('body').find('p').remove();
      fizzBuzz();
      $(this).val('')
    };    
  });

});