//7. Write a function that removes duplicate values from an array.

function removeDuplicates(arr) {
    const unduplicatedArray = [...new Set(arr)];
    console.log(`Original array: [${arr}]`);
    console.log(`Array with duplicates removed: [${unduplicatedArray}]`);
  }
  
  // create an array ;
  const inputArray = ["paccy", "eudoxie", "frank", "keynes", "paccy", "emma", "frank", "brian"]; 
  removeDuplicates(inputArray);
  