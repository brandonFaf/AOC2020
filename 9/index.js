const input = require('./input.js');

// part 1
// const size = 25;
// const sumExists = (num, i) => {
//   const subSet = input.slice(i - size, i);
//   for (let i = 0; i < subSet.length; i++) {
//     for (let j = 0; j < subSet.length; j++) {
//       if (subSet[i] + subSet[j] == num) {
//         return true;
//       }
//     }
//   }
//   return false;
// };
// for (let i = size; i < input.length; i++) {
//   const num = input[i];
//   if (!sumExists(num, i)) {
//     console.log(num);
//     break;
//   }
// }

const target = 36845998; //from part 1
const sum = (start, end) => {
  return input.slice(start, end).reduce((acc, n) => acc + n);
};
const getAnswer = (start, end) => {
  const [min, max] = input.slice(start, end).reduce(
    ([min, max], n) => {
      if (n < min) {
        min = n;
      }
      if (n > max) {
        max = n;
      }
      return [min, max];
    },
    [Infinity, 0]
  );
  console.log(min + max);
};
for (let first = 0; first < input.length; ) {
  for (let last = 1; last < input.length; ) {
    const total = sum(first, last);
    if (total > target) {
      first += 1;
    }
    if (total < target) {
      last += 1;
    }
    if (total == target) {
      getAnswer(first, last);
      break;
    }
  }
  break;
}
