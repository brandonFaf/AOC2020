const input = require('./input.js');
const yup = require('yup');
// part 1
// const passports = input.split(/\n\n/g);

// const keys = { byr: 0, iyr: 1, eyr: 2, hgt: 3, hcl: 4, ecl: 5, pid: 6 };
// const valid = passports.reduce((acc, p) => {
//   const result = Array.from({ length: 7 }, () => false);
//   const lines = p.split(/\n/g);
//   lines.forEach(l => {
//     const entries = l.split(' ');
//     entries.forEach(e => {
//       const [label] = e.split(':');
//       result[keys[label]] = true;
//     });
//   });
//   return result.every(x => x == true) ? (acc += 1) : acc;
// }, 0);
// console.log(valid);

// part 2

const passports = input.split(/\n\n/g);
const heightCm = yup.number().min(150).max(193);
const heightIn = yup.number().min(59).max(76);
const schema = yup.object().shape({
  byr: yup.number().min(1920).max(2002),
  iyr: yup.number().min(2010).max(2020),
  eyr: yup.number().min(2020).max(2030),
  hgt: yup.string().test('hgt', 'invalid height', value => {
    if (value.indexOf('cm') > 0 && value.indexOf('in') == -1) {
      const [num] = value.split('cm');
      return heightCm.isValidSync(num);
    }
    if (value.indexOf('in') > 0 && value.indexOf('cm') == -1) {
      const [num] = value.split('in');
      return heightIn.isValidSync(num);
    }
    return false;
  }),
  hcl: yup.string().matches(/^#([a-fA-F0-9]{6})$/),
  ecl: yup.string().matches(/amb|blu|brn|gry|grn|hzl|oth/g),
  pid: yup.string().matches(/\d{9}/)
});
const keys = { byr: 0, iyr: 1, eyr: 2, hgt: 3, hcl: 4, ecl: 5, pid: 6 };
const valid = passports.reduce((acc, p) => {
  const result = Array.from({ length: 7 }, () => false);
  const lines = p.split(/\n/g);
  const passport = {};

  lines.forEach(l => {
    const entries = l.split(' ');
    entries.forEach(e => {
      const [label, value] = e.split(':');
      result[keys[label]] = true;
      passport[label] = value;
    });
  });
  return result.every(x => x == true) && schema.isValidSync(passport)
    ? (acc += 1)
    : acc;
}, 0);
console.log(valid);
