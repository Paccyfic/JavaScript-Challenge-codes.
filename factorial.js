//Write a function that takes a number and calculates its factorial recursively. 


function recursiveFactorial(number) {
    if (number === 0 || number === 1) {
      return 1;
    } else {
      return number * recursiveFactorial(number - 1);
    }
  }
  
  // Enter a number here;
  const inputNumber = 7; 
  console.log(`The factorial of ${inputNumber} is: ${recursiveFactorial(inputNumber)}`);
  
  