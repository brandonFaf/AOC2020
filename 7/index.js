const input = require('./input.js');

// Part 1
// const bags = input.map(rule => {
//   const [bag, ...contains] = rule.match(/\b\w*\b\s\b\w*\b(?=\sbag)/g);
//   return { bag, contains };
// });

// const containsGold = new Set();
// for (let i = 0; i < bags.length; i++) {
//   const { bag, contains } = bags[i];
//   if (containsGold.has(bag)) {
//     continue;
//   }

//   const canContainGold = contains.reduce(
//     (acc, b) => (acc ? acc : containsGold.has(b) || b === 'shiny gold'),
//     false
//   );
//   if (canContainGold) {
//     containsGold.add(bag);
//     i = -1;
//   }
// }
// console.log(containsGold.size);

// part 2

const bags = input.map(rule => {
  const [bag, ...contains] = rule.match(/[\d\s]*\b\w*\b\s\b\w*\b(?=\sbag)/g);
  return { bag, contains };
});
const findBag = container => {
  const { contains } = bags.find(b => b.bag == container);
  if (contains[0].trim() == 'no other') {
    return 1;
  }
  let total = 0;
  for (let b of contains) {
    const [amount, ...bag] = b.trim().split(' ');
    const found = findBag(bag.join(' '));
    total += amount * found;
  }
  return total + 1;
};
const totalBags = findBag('shiny gold', 1);
console.log(totalBags - 1);

// shiny gold bags contain 2 dark red bags.
// dark red bags contain 2 dark orange bags.
// dark orange bags contain 2 dark yellow bags.
// dark yellow bags contain 2 dark green bags.
// dark green bags contain 2 dark blue bags.
// dark blue bags contain 2 dark violet bags.
// dark violet bags contain no other bags.

// DV = 1 bag
// DB = 2*DV + 1 (the DB bag)
// DG = 2*DB + 1 (the DG bag)
// DY = 2*DG + 1 (the DY bag)
// DO = 2*DY + 1 (the DO bag)
// DR = 2*DO + 1 (the DR bag)
// SG = 2*DR (Don't include the SG bag)
