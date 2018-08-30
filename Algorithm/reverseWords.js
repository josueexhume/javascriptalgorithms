var reverseWordsAlgorithm = (function () {
  //reverse each word in a string, this doesnt reverse the string itself, but each word
  function reverseWords(string) {
    var words = string.split(" ");
    var finalString = "";

    words.forEach(function (word) {
      var currentWord = word.split("");
      for (let j = 0; j < Math.floor(currentWord.length / 2); j++) {
        var temptLetterStart = currentWord[j];
        var temptLetterEnd = currentWord[currentWord.length - (j + 1)];
        currentWord[j] = temptLetterEnd;
        currentWord[currentWord.length - (j + 1)] = temptLetterStart;
      }
      finalString += currentWord.join("") + " ";
    });
    return finalString;
  }

  console.log(reverseWords("this is a string of words"));
})();