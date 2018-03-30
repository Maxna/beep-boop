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
  // var answer = ["I'm sorry, Dave. I'm afraid I can't do that.", "Boop!", "Beep!"]
  var inputValue = $("#userInput").val();
  var userInputData = parseInt($("#userInput").val());
  var retort = beepConverter(inputValue);

  if (retort === "I'm sorry, Dave. I'm afraid I can't do that.") {
    $(".dave").show();
  } else if (retort === "Boop!") {
    $(".boop").show();
  } else if (retort === "Beep!") {
    $(".beep").show();
  } else {
    $(".number").text(retort);
  }
    console.log(retort);

    event.preventDefault();
    
  });
});
