var bubbleSortAlgorithm = (function () {
  
  //o(n^2) time complexity
  function bubbleSort(array) {

    for (let i = 0; i < array.length; i++) {

      for (let j = array.length; j > i; j--) {
          var leftIndex = j - 2;
          var rightIndex = j - 1;

          if (array[rightIndex] < array[leftIndex]) {
            var tempLeftValue = array[leftIndex];
            array[leftIndex] = array[rightIndex];
            array[rightIndex] = tempLeftValue;
          }
        }
    }

    return array;
  }

  console.log(bubbleSort([5, 3, 9, 9, 8, 2, 1, 4, 2]));
})();