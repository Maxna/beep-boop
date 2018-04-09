function beepConverter(inputValue) {
  var result = [];
  for (var i = 0; i <= inputValue; i++) {
    var numbers = i.toString().split('');
    if (i % 3 === 0 && i != 0) {
      result.push("I'm sorry, Dave. I'm afraid I can't do that.");
    } else if (numbers.includes('1')) {
      result.push("Boop!");
    } else if (numbers.includes('0')) {
      result.push("Beep!");
    } else {
    result.push(" " + i);
    }
  }
  return result;
}

$(document).ready(function() {
  $("#beepConverter").submit(function(event) {
    event.preventDefault();
  var inputValue = $("#userInput").val();
  $("#boop").text(beepConverter(inputValue));
  $("#output").show();

  });
});
