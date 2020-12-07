const input = require('./input.js');

// part 1
// const groups = input.split(/\n\n/g);
// const total = groups.reduce((acc, p) => {
//   const forms = p.split(/\n/g);
//   const answers = new Set();

//   forms.forEach(l => {
//     const entries = l.split('');
//     entries.forEach(e => answers.add(e));
//   });
//   console.log(answers.size);
//   return (acc += answers.size);
// }, 0);
// console.log(total);

// part 2

const groups = input.split(/\n\n/g);
const total = groups.reduce((acc, g) => {
  const forms = g.split(/\n/g);
  const answers = {};

  forms.forEach(l => {
    const entries = l.split('');
    entries.forEach(e => {
      let answerCount = answers[e] || 0;
      answers[e] = answerCount + 1;
    });
  });
  let count = 0;
  for (const key in answers) {
    if (answers[key] == forms.length) count++;
  }
  return acc + count;
}, 0);
console.log(total);
