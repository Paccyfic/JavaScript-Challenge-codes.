//10. Write a function that takes an object and returns the number of properties/keys. 


function countObjectProperties(obj) {
    const propertyCount = Object.keys(obj).length;
    console.log(`Number of properties/keys in the object: ${propertyCount}`);
  }
  
  const exampleObject = { name: 'paccy', age: 21, city: 'kigali', sex: 'male', nationality: 'Rwandan' }; 
  countObjectProperties(exampleObject);
  
