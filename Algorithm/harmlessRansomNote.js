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

  consone.log(harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'));

})();
