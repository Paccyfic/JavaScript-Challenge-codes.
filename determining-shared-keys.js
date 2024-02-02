//11. Write a function that takes two objects and determines if they share at least one key-value pair.


function sharedKeyValuePair(obj1, obj2) {
    for (const key in obj1) {
      if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
        console.log("Objects share at least one key-value pair.");
        return;
      }
    }
  
    console.log("Objects do not share any key-value pair.");
  }
  
  //take an Example of two objects;
  const object1 = { name: 'paccy', age: 21, city: 'Kigali' };
  const object2 = { name: 'brian', age: 21, city: 'Gisenyi' };
  sharedKeyValuePair(object1, object2);
  