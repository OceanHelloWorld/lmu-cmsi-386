
// This is will be HW one

function change (amount) {
  // output an error when the input a negative amount
  if (amount < 0) {
    throw new RangeError('amount cannot be negative');
  }
  // result is the output of function change
  const result = [];
  // remaining is the amount has not been proceed to coins
  let remaining = amount;
  // 25, 10, 5, 1 are the coin currency
  [25, 10, 5, 1].forEach((coin) => {
    // divide the amount by each coin currency from 25 to 1
    result.push(Math.floor(remaining / coin));
    // keep modulating until the remaining is 0
    remaining %=coin;
  });
  return result;
}

<<<<<<< HEAD

function splitString (stringToSplit) {
  // initialize the characters to get rid off
  let singleQuote = '\'';
  let doubleQuote = '\"';
  // break strings to arrays that separated by single quote
  let arrayOfStrings = stringToSplit.split(singleQuote);
  arrayOfStrings = arrayOfStrings.join('');
  // break strings to arrays that separated by double quote
  arrayOfStrings = arrayOfStrings.split(doubleQuote);
  // put array of of separated characters back to 1 string
  arrayofStrings = arrayOfStrings.join('');
  return arrayofStrings;
}


function scramble(input) {
  // split input string into an array of characters
  input = input.split("")
  // arrayLen is the length of input array
  let arrayLen = input.length;

  // output is the output of scramble function
  let output = new Array(arrayLen);
  // iterate through the input array
  for (let i = 0; i < arrayLen; i++) {
    // pick a random integer that's less or equal to the length of array n
    let arrPnt = Math.floor(Math.random() * (arrayLen - i));
    // select from the original array the letter that's from the random integer position, pass that on to the output
    output[i] = input[arrPnt];
    // take out the letter already selected
    input.splice(arrPnt,1);
  }
  // stitch back together the scrambled array to one single string
  return output.join('');
}


// export this code for warmup-test.js
module.exports = {
  change, splitString, scramble
};
=======
>>>>>>> 373d72e9f0fad27138e8046c8b0b6a1a262b27ed
