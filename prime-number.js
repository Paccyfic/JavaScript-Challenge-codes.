// 1. Write a function that takes a number and determines if it is a prime number. Return true if prime, false if not.


function prime(number) {
    if (number <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example ;
  const number = 3; 
  console.log (prime(number));
  