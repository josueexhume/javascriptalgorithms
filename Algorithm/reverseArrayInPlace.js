var reverseArrayInPlaceAlgorithm = (function () {

  //takes in an array and reverse the array
  function reverseArrayInPlace(arr) {
    for (let i = 0; i < arr.length / 2; i++) { // o(n/2) since we only do half the length
      var itemStart = arr[i];
      var itemEnd = arr[arr.length - (i + 1)];
      arr[i] = itemEnd;
      arr[arr.length - (i + 1)] = itemStart;
    }

    return arr;
  }

  console.log(reverseArrayInPlace([1,2,3,4,5,6,7,8,9,10]));
})();