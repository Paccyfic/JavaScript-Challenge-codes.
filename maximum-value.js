//3. Write a function that takes an array of numbers and returns the maximum value. Do not use Math.max(). 
 
 
function findMaxValue(numbers) {
    if (numbers.length === 0) {
      console.log("Array is empty.");
      return;
    }
  
    let max = numbers[0];
  
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > max) {
        max = numbers[i];
      }
    }
  
    console.log(`The maximum value in the array is: ${max}`);
   }
  
  // create an array of numbers;
  const numberArray = [5, 12, 8, 3, 20, 7]; 
  findMaxValue(numberArray);
  