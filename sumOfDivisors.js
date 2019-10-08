function sumOfDivisors(n) {

    
    var sum = 1 + n;
    var nSqrt = Math.sqrt(n);
  
    for (var i = 2; i <= nSqrt; i++) {
      if (n % i === 0) {
        sum += i + n / i;
      }
    }
    if (nSqrt % 1 === 0) {
      sum -= nSqrt;
    }
    return sum;
}

sumOfDivisors(12);