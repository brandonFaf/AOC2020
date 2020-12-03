const input = require('./input.js');

// part 1
// const result = input.reduce((acc,pwd)=>{
//   const [crit, p] = pwd.split(':');
//   const [min, max] = crit.match(/\d+/g)
//   const letter = crit[crit.length-1];
//   const matches = p.match(new RegExp(letter,'g'));
//   if (!matches) {
//     return acc
//   }
//   if (matches.length >= min && matches.length <= max) {
//     acc+=1
//   }
//   return acc

// },0
// )

// console.log(result)

//part 2

const result = input.reduce((acc, pwd) => {
  const [crit, p] = pwd.split(':');
  const [min, max] = crit.match(/\d+/g);
  const letter = crit[crit.length - 1];
  if (p.trim()[min - 1] == letter && p.trim()[max - 1] != letter) {
    acc += 1;
  }
  if (p.trim()[min - 1] != letter && p.trim()[max - 1] == letter) {
    acc += 1;
  }
  return acc;
}, 0);
console.log(result);
