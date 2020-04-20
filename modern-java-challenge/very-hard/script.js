const input1 = "the quick brown fox jumps over the calm kitten quietly";
const input2 = "this hat is the greatest!"
const input3 ="what a wonderful day it has been!"
const output1 = (inputString) => {
  const sentence = inputString.split("");
  const distinct_letters = [];
  const duplicate_letters = [];

  const trackDuplicatesAndDistincts = (char) => {
    if (distinct_letters.indexOf(char) === -1) {
      //push into that list
      distinct_letters.push(char);
    } else {
      duplicate_letters.push(char);
    }
  };

  let i = 0;
  for (i = 0; i < sentence.length; i = i + 1) {
    const x = sentence[i];
    trackDuplicatesAndDistincts(x);
  }

  let result = "";
  distinct_letters.forEach((char) => {
    if (result !== "") {
      return;
    }
    if (duplicate_letters.indexOf(char) === -1) {
      result = char;
    }
  });
  return result;
};

console.log("result", output1(input1));
console.log("result", output1(input2));
console.log("result", output1(input3));
