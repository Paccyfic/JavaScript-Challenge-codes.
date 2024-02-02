//12. Write a function that takes an object and converts it to an array of key-value pairs.


function objectToArray(obj) {
    const keyValueArray = Object.entries(obj);
    console.log(`Original object:`, obj);
    console.log(`Array of key-value pairs:`, keyValueArray);
  }
  
  // let's take an example of this ;
  const exampleObject = { name: 'paccy', grades: 90, course: 'Computer Science', semester:'first-semester'  };
  objectToArray(exampleObject);
  