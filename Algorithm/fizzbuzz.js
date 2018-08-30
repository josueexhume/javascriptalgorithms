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

  fizzBuzz(20);

})();
