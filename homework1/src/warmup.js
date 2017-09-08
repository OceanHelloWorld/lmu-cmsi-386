
// This is will be HW one

function change (amount) {
  // output an error when the input a negative amount
  if (amount < 0) {
    throw new RangeError('amount cannot be negative');
  }
  const result = [];

  let remaining = amount;

  [25, 10, 5, 1].forEach((coin) => {
    result.push(Math.floor(remaining / coin));
    remaining %=coin;
  });
  return result;
}
// export this codefor warmup-test.js
module.exports = {
  change,
};


function
