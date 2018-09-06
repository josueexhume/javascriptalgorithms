var sieveOfEratosthenesAlgorithm = (function () {

  function sieveOfEratosthenes(num) {
    // returns all prime numbers up to num in an array
    var numList = [];
    for (let i = 0; i <= num; i++) {
      numList[i] = true;
    }

    numList[0] = false;
    numList[1] = false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      for (let j = 2; j * i <= num; j++) {
        numList[j * i] = false;
      }
    }

    var result = [];
    for (let i = 0; i < numList.length; i++) {
      if (numList[i]) {
        result.push(i);
      }

    }
    return result;
  }

  console.log(sieveOfEratosthenes(20));
})();