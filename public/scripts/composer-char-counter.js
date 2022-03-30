$(document).ready(function() {
  $("#tweet-text").keyup(function() {
    let charCount = $(this).val().length;
    let totalChar = 140;
    let currentValue = totalChar - charCount;
    if (currentValue > 0) {
      $(".counter").text(currentValue).css('color', 'slategrey');
    } else {
      $(".counter").text(currentValue).css('color', 'red');
    }
  });
});