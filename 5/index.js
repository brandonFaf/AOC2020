const input = require('./input.js');
// part 1

// const decode = code => {
//   const col = code.substring(0, code.length - 3);
//   const row = code.substr(-3);
//   const colBi = col.replace(/F/g, 0).replace(/B/g, 1);
//   const rowBi = row.replace(/L/g, 0).replace(/R/g, 1);
//   return parseInt(colBi, 2) * 8 + parseInt(rowBi, 2);
// };
// const result = input.reduce((acc, code) => {
//   const val = decode(code);
//   return val > acc ? val : acc;
// }, 0);
// console.log(result);

// part 2
const decode = code => {
  const col = code.substring(0, code.length - 3);
  const row = code.substr(-3);
  const colBi = col.replace(/F/g, 0).replace(/B/g, 1);
  const rowBi = row.replace(/L/g, 0).replace(/R/g, 1);
  return parseInt(colBi, 2) * 8 + parseInt(rowBi, 2);
};
const ids = input.map(decode);

for (let i = 0; i < ids.length; i++) {
  if (ids.indexOf(ids[i] + 1) == -1) {
    console.log(ids[i] + 1);
  }
}
