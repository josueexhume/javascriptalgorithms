var twoSumAlgorithm = (function () {

  //returns every pair of numbers that adds up to a given sum
  function twoSum(numArray, sum) {
    var result = [];
    var hashTable = [];
      for (let i = 0; i < numArray.length; i++) {
        var currNum = numArray[i];
        var counterPart = sum - currNum;
        if(hashTable.indexOf(counterPart) > -1){
          result.push([currNum, counterPart]);
        } 
        hashTable.push(numArray[i]);
      }

    return result;
  }

  console.log(twoSum([1,6,4,5,3,3], 7));
})();