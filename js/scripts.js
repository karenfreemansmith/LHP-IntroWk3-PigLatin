//alert("jQuery is working on " + $("h1").text()); //test for jQuery linked and loaded correctly

//business logic - translates phrase
function isVowel(c) {
  if((c==="a")||(c==="e")||(c==="i")||(c==="o")||(c==="u")) {
    return true;
  } else {
    return false;
  }
}

function anslateTray (phrase) {
  var words = phrase.split(" ");
  var newWords = [];
  var newWord = "";
  var firstChar = "";
  var startWord = "";

  words.forEach(function(word) {
    newWord = word.split("");
    firstChar = newWord.shift();
    while(!isVowel(firstChar)) {
      startWord+=firstChar;
      firstChar = newWord.shift();
    }
    if(startWord!=="") {
      newWord.push(startWord, "a", "y");
      startWord="";
    } else {
      newWord.push("a", "y");
    }
    newWord.unshift(firstChar);
    newWords.push(newWord.join(""));
  });
  phrase = newWords.join(" ");
  return phrase;
}

//user interface logic - getting from and sending to webpage
$("#translateIt").click(function() {
  var yourPhrase = $("#myPhrase").val();
  $("#translation").text(anslateTray(yourPhrase));
});
