//4. Write a function that reverses a string without using the built-in reverse() method.

function reverseString(inputString) {
    let reversedString = '';
  
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString[i];
    }
  
    console.log(`Original string: ${inputString}`);
    console.log(`Reversed string: ${reversedString}`);
  }
  
  // Enter a string to be reversed:
  const inputString = "pacific NDAHIRO"; 
  reverseString(inputString);
  