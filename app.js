var fizzBuzzAlgorithm = (function () {

  // take in a number and log out all the numbers between 1 and  that number
  // if the number is divisible by 3 and 5 then log the word fibuzz instead
  // if the number is divisible by 3 then log the word fizz instead
  // if the number is divisible by 5 then log the word buzz instead
  function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
      } else if (i % 3 === 0) {
        console.log("fizz");
      } else if (i % 5 === 0) {
        console.log("buzz");
      } else {
        console.log(i);
      }
    }
  }

  //uncomment to run
  //fizzBuzz(20);

})();

// linear time complexity
//o(n) time complexity or o(n + m)
var harmlessRansomNoteAlgorithm = (function () {

  // a note made from words in the magazine
  function harmlessRansomNote(noteText, magazineText) {
    var noteArr = noteText.replace(/[,|.]/g, '').split(" ");
    var magazineArr = magazineText.replace(/[,|.]/g, '').split(" ");
    // our hash table
    var magazineObj = {};

    //o(n)
    magazineArr.forEach(word => {
      magazineObj[word] = (!magazineObj.hasOwnProperty(word) ? 1 : ++magazineObj[word]);
    });

    var noteIsPossible = true;
    //on(n)
    for (let i = 0; i < noteArr.length; i++) {
      if (magazineObj.hasOwnProperty(noteArr[i]) && magazineObj[noteArr[i]] > 0) {
        magazineObj[noteArr[i]]--;
      } else {
        noteIsPossible = false;
        break;
      }
    }

    return noteIsPossible;
  }

  //uncomment to run
  //consone.log(harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'));

})();


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

  //uncomment to run
  //console.log(isPalindrome("madam i'm adam", false));

})();