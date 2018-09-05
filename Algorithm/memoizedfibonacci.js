var memoizedFibonacciAlgorithm = (function () {

  //generates a sequence of number up to the nth position and returns that last number.
  //this version of the algoritms time complexity is O(N) which is very efficient
  function memoizedFibonacci(index, cache) {
    cache = cache || [];

    if (cache[index]) {
      return cache[index];
    } else {
      if (index < 3) {
        return 1;
      } else {
        cache[index] = memoizedFibonacci(index - 1, cache) + memoizedFibonacci(index - 2, cache);
      }
    }

    return cache[index];
  }

  console.log(memoizedFibonacci(4));
})();