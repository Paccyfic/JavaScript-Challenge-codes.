//6. Write a function that capitalizes the first letter of each word in a sentence.


function capitalizeWords(sentence) {
    const words = sentence.split(" ");
    const capitalizedWords = [];
  
    for (const word of words) {
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      capitalizedWords.push(capitalizedWord);
    }
  
    const capitalizedSentence = capitalizedWords.join(" ");
    console.log(`Original sentence: ${sentence}`);
    console.log(`Capitalized sentence: ${capitalizedSentence}`);
  }
  
  // let's enter a sentence example;
  const inputSentence = "this is a pacific's sentence example."; 
  capitalizeWords(inputSentence);
  