function beepConverter(input) {
  var result = "";

  if ((input % 3) === 0){
    result = "I'm sorry, Dave. I'm afraid I can't do that.";
  } else if (input === 1) {
    result = "Boop!";
  } else if (input === 0) {
    result = "Beep!";
  }

  
  return result;
}





















$(document).ready(function() {
  $("#beepConverter").submit(function(event) {
  event.preventDefault();


  });
});
