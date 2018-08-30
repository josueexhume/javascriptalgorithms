var meanMedianModeAlgorithm = (function () {

  //add all number in array together and divide by the length
  function getMean(array) {
    var total = 0;
    array.forEach(item => {
      total += item;
    });
    var mean = total / array.length;
    return mean;
  }

  function getMedian(array) {
    array.sort((a, b) => {
      return a - b;
    });

    var median;
    if (array.length % 2 === 0) { // if even
      var midIndex1 = (array.length / 2) - 1;
      var midIndex2 = (array.length / 2);
      median = (array[midIndex1] + array[midIndex2]) / 2;
    } else { // if odd
      var midIndex = Math.floor(array.length / 2);
      median = array[midIndex];
    }

    return median;
  }


  // returns the numbers that appeared the most
  function getMode(array) {
    var occurence = {};
    array.forEach(item => {
      if (!occurence.hasOwnProperty(item)) {
        occurence[item] = 0;
      }
      occurence[item]++;
    });

    var maxOccurence = 0;
    var modes = [];
    for (const num in occurence) {
      if (occurence[num] > maxOccurence) {
        modes = [num];
        maxOccurence = occurence[num];
      } else if (occurence[num] === maxOccurence) {
        modes.push(num);
      }
    }

    if (modes.length === Object.keys(occurence).length) {
      modes = [];
    }
    return modes;
  }

  function meanMedianMode(arr) {
    return {
      mean: getMean(arr),
      median: getMedian(arr),
      mode: getMode(arr),
    };
  }

  console.log(meanMedianMode([1,2,3,4,5,4,6,1]));
  console.log(meanMedianMode([9,10,23,10,23,9]));
})();