
  //search for key in O(log N)
  function binarySearch(numArray, key) {
    var lowIndex = 0;
    var midIndex = Math.floor(numArray.length / 2); // taking the floor since its 0 based index
    var highIndex = numArray.length;
    var midValue = numArray[midIndex];

    if(midValue === key){
      return true;
    } else {
      if( lowIndex === highIndex -1) { return false;}

      if(key < midValue){
        highIndex = midIndex - 1;
      } else {
        lowIndex = midIndex + 1;
      }
      var arrPart = numArray.slice(lowIndex, highIndex);


      return binarySearch(arrPart, key);
    }
  }

  console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 7));