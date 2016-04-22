//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

//business logic - translates phrase
function anslateTray (phrase) {
  var words = phrase.split(" ");
  var newWords = [];
  var newWord = "";
  var firstChar = "";

  words.forEach(function(word) {
    newWord = word.split("");
    firstChar = newWord.shift();
    newWord.push(firstChar, "a", "y");
    newWords.push(newWord.join(""));
  });
  alert(words);
  alert(newWords);
  phrase = newWords.join(" ");
  return phrase;
}

//user interface logic - getting from and sending to webpage
$("#translateIt").click(function() {
  var yourPhrase = $("#myPhrase").val();
  $("#translation").text(anslateTray(yourPhrase));
});
