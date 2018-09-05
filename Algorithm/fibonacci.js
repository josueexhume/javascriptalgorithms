var fibonacciAlgorithm = (function () {

  //generates a sequence of number up to the nth position and returns that last number.
  //this version of the algoritms time complexity is O(2^N) which is very inefficient
  function fibonacci(position) {
    //this was hard to wrap my head around but if you visualize it as a tree, it becomes easier to 
    //understand
    if(position  < 3){
      return 1;
    } else {
      return fibonacci(position - 1) + fibonacci(position - 2);
    }
  }

  console.log(fibonacci(4));
})();