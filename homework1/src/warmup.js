
// This is will be HW one

var rp = require('request-promise');

// not working, unknown, output as expected in code performance

function change(amount) {
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
    remaining %= coin;
  });
  return result;
}

function stripQuotes(stringToSplit) {
  // initialize the characters to get rid off
  const singleQuote = '\'';
  const doubleQuote = '"';
  // break strings to arrays that separated by single quote
  let arrayOfStrings = stringToSplit.split(singleQuote);
  arrayOfStrings = arrayOfStrings.join('');
  // break strings to arrays that separated by double quote
  arrayOfStrings = arrayOfStrings.split(doubleQuote);
  // put array of of separated characters back to 1 string
  arrayOfStrings = arrayOfStrings.join('');
  return arrayOfStrings;
}


function scramble(input) {
  // split input string into an array of characters
  input = input.split('');
  // arrayLen is the length of input array
  const arrayLen = input.length;

  // output is the output of scramble function
  const output = new Array(arrayLen);
  // iterate through the input array
  for (let i = 0; i < arrayLen; i += 1) {
    // pick a random integer that's less or equal to the length of array n
    const arrPnt = Math.floor(Math.random() * (arrayLen - i));
    // select from the original array the letter that's from the random
    // integer position, pass that on to the output
    output[i] = input[arrPnt];
    // take out the letter already selected
    input.splice(arrPnt, 1);
  }
  // stitch back together the scrambled array to one single string
  return output.join('');
}


// not working!!!
// not understanding how => work
function powers(base, limit, p) {
  // power is the power of output
  let power = 0;
  // iterate through all the power of base until the product exceed limit
  while (base ** power <= limit) {
    p(base ** power);
    power += 1;
  }
}

// not working!!!
// question about solution of the test harness "  const g1 = powersGenerator(2, 1);
//    g1.next().should.eql({ value: 1, done: false });

function* powersGenerator(base, limit) {
  // power = the power of input
  let power = 0;
  // iterate through all the power of input1 until the product exceed input2
  while (base ** power <= limit) {
    yield base ** power;
    power += 1;
  }
}




function say(firstArg) {
  // set the base string
  var arg = [];
  function words(nextArg) {
    // stop function when it reaches empty input
    if (nextArg == undefined) {
      return arg.join(' ');
    }
    // keep adding arguments to the end of base string
    arg.push(nextArg);
    return words;
  }
  // output the strings put together
  return words(firstArg);
}




function interleave() {
  // set array1 is the array from 1st input argument; arrayOutput is the output of this function
  const array1 = arguments[0];
  const arrayOutput = [];
  let i1;
  // if array in the first argument is shorter than the rest of the argument,
  // then use the length of first argument as counter
  if (array1.length < arguments.length) {
  // i1 is the pointer to iterate through the all the elements in the 1st argument array
    for (i1 = 0; i1 < array1.length; i1 += 1) {
      // get one element from 1st argument, get another element from the rest of the
      // argument, back and forth
      arrayOutput[2 * i1] = array1[i1];
      arrayOutput[(2 * i1) + 1] = arguments[i1 + 1];
    }
    // iterate through the rest of the argument that did not get interleaved
    for (let i = 2 * array1.length; i < (arguments.length + array1.length) - 1; i += 1) {
      arrayOutput[i] = arguments[(i - array1.length) + 1];
    }
  // if array in the first argument is longer than the rest of the argument,
  // then use the length of the rest of the arguments as counter
  } else {
    // i2 is the pointer to iterate through the all the elements in the 1st
    // argument array
    let i2;
    for (i2 = 0; i2 < arguments.length; i2 += 1) {
      // get one element from 1st argument, get another element from the rest
      // of the argument, back and forth
      arrayOutput[2 * i2] = array1[i2];
      arrayOutput[(2 * i2) + 1] = arguments[i2 + 1];
    }
    // iterate through the rest of the argument that did not get interleaved
    for (let i = (2 * arguments.length) - 1; i < (arguments.length + array1.length) - 1; i += 1) {
      arrayOutput[i] = array1[(i - arguments.length) + 1];
    }
  }
  return arrayOutput;
}



function randomName(data) {
  // acquire the data from API
  const options = {
    method: 'GET',
    json: true,
    uri: `http://uinames.com/api/?gender=${data.gender}&region=${data.region}&amount=1`,
  };
  // output the data acquired
  return rp(options).then((s) => console.log(`${s.surname}, ${s.name}`));
}

// Not working 100% !!!!
// not default to 1, can't accept empty object, doesnt have immutable fields
let cylinder = function (r) {
  const cyld = Object.create(cylinder.prototype);
  // if no radius set it default ot 1
  if (r.radius == null) {
    r.radius = 1;
  }
  // if no height set it default ot 1
  if (r.height == null) {
    r.height = 1;
  }
  // pass the input parameters
  cyld.radius = r.radius;
  cyld.height = r.height;
  // attempt to freeze the input
  Object.freeze(this.radius);
  Object.freeze(this.height);
  return cyld;
};

cylinder.prototype = {
  // create prototype of the function
  // calculating surfaceArea from input radius and height
  surfaceArea: function () { return 2 * Math.PI * this.radius * (this.radius + this.height); },
  // calculating volume from input radius and height
  volume: function () { return Math.PI * this.radius * this.radius * this.height; },
  // output the string as requested
  toString: function () { return 'Cylinder with radius ' + this.radius + ' and height ' + this.height; },
  // calculating stretched value from input height

  stretch: function (stretchValue) { return this.height *= stretchValue; },
  // calculating widened value from input radius

  widen: function (widenValue) { return this.radius *= widenValue; }
};

// export this code for warmup-test.js
module.exports = {
  change, stripQuotes, scramble, powers, powersGenerator, say, interleave, randomName, cylinder,
};
