
var isPalindromeAlgorithm = (function () {
  // a palindrome is a word or sentence that's spelled the sames foward and backward, like racecar or madam, i'm adam
  function isPalindrome(string, useRegex) {
    if (useRegex) {
      var stringFormatted = string.toLowerCase().replace(/[^a-zA-Z]/g, ''); // replace all non letters
      var stringReversed = string.toLowerCase().replace(/[^a-zA-Z]/g, '').split("").reverse().join("");

      return stringFormatted === stringReversed;

    } else {
      string = string.toLowerCase();
      var charactersArr = string.split("");
      var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

      var lettersArr = [];
      for (let i = 0; i < charactersArr.length; i++) {
        if (validCharacters.indexOf(charactersArr[i]) > -1) {
          lettersArr.push(charactersArr[i]);
        }
      }

      return lettersArr.join("") === lettersArr.reverse().join("");
    }
  }

  console.log(isPalindrome("madam i'm adam", false));

})();