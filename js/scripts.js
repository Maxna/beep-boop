function beepConverter(inputValue) {

  var result = "";
  var sorry = inputValue % 3 === 0

  if (inputValue > 0 && sorry) {
    result = "I'm sorry, Dave. I'm afraid I can't do that.";
  } else if (inputValue.includes('1')) {
    result = "Boop!";
  } else if (inputValue.includes('0')) {
    result = "Beep!";
  } else result = inputValue;

  return result;
}

$(document).ready(function() {
  $("#beepConverter").submit(function(event) {
  var inputValue = $("#userInput").val();
  var userInputData = parseInt($("#userInput").val());
  var retort = beepConverter(inputValue);

  if (retort === "I'm sorry, Dave. I'm afraid I can't do that.") {
    $(".dave").toggle();
  } else if (retort === "Boop!") {
    $(".boop").toggle();
  } else if (retort === "Beep!") {
    $(".beep").toggle();
  } else {
    $(".number").show(inputValue);
  }

    event.preventDefault();

  });
});
