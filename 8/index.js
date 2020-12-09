const input = require('./input.js');

// part 1
// let acc = 0;
// let visited = {};
// for (let i = 0; i < input.length; ) {
//   if (visited[i]) {
//     break;
//   }
//   visited[i] = true;
//   const [opp, amount] = input[i].split(' ');
//   switch (opp) {
//     case 'nop':
//       i += 1;
//       break;
//     case 'acc':
//       acc += parseInt(amount);
//       i += 1;
//       break;
//     case 'jmp':
//       i += parseInt(amount);
//       break;
//     default:
//       break;
//   }
// }
// console.log(acc);
// const input = [
//   'nop +0',
//   'acc +1',
//   'jmp +4',
//   'acc +3',
//   'jmp -3',
//   'acc -99',
//   'acc +1',
//   'jmp -4',
//   'acc +6'
// ];
const doMove = (opp, i, acc, amount) => {
  switch (opp) {
    case 'nop':
      i += 1;
      break;
    case 'acc':
      acc += parseInt(amount);
      i += 1;
      break;
    case 'jmp':
      i += parseInt(amount);
      break;
    default:
      break;
  }
  return [i, acc];
};
let acc = 0;
let visited = {};
let i = 0;
let changed = { inst: 0, acc: 0 };
let haveChanged = false;
while (i < input.length) {
  let vals;
  if (visited[i]) {
    i = changed.inst;
    acc = changed.acc;
    vals = doMove(input[i].split(' ')[0], i, acc, input[i].split(' ')[1]);
    i = vals[0];
    acc = vals[1];
    haveChanged = false;
  }
  visited[i] = true;
  let [opp, amount] = input[i].split(' ');
  if (!haveChanged) {
    changed = { inst: i, acc, visited };
    opp = opp == 'nop' ? 'jmp' : 'nop';
    haveChanged = true;
  }
  vals = doMove(opp, i, acc, amount);
  i = vals[0];
  acc = vals[1];
}

console.log(acc);
