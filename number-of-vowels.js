//5. Write a function that takes a sentence string and returns the number of vowels in the sentence.


function vowelsNumber(sentence) {
    const vowels = "aeiouAEIOU";
    let vowelCount = 0;
  
    for (let i = 0; i < sentence.length; i++) {
      if (vowels.includes(sentence[i])) {
        vowelCount++;
      }
    }
  
    console.log(`The number of vowels in the sentence is: ${vowelCount}`);
  }
  
  // let's Enter a sentence;
  const inputSentence = "This is an example sentence"; 
  vowelsNumber(inputSentence);
  