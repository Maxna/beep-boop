function beepConverter(input) {
  // var inputNumber = parseInt(input);
  // var responses = ["I'm sorry, Dave. I'm afraid I can't do that.", "Boop!", "Beep!"]
  var result = "";
  var sorry = input % 3 === 0

  if (input > 0 && sorry) {
    // for (var i=0; i===input; i++) {
    result = "I'm sorry, Dave. I'm afraid I can't do that.";
    // }
  } else if (input.includes('1')) {
    result = "Boop!";
  } else if (input.includes('0')) {
    result = "Beep!";
  } else result = input;

console.log(sorry);

  return result;
}





















$(document).ready(function() {
  $("#beepConverter").submit(function(event) {
  event.preventDefault();


  });
});
