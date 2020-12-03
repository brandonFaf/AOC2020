//Part 1
// const input = require('./input');
// const l = input[0].length;
// let right = 3;
// input.shift();
// const numOfTrees = input.reduce((acc, row) => {
//   if (row[right % l] == '#') {
//     acc += 1;
//   }
//   right += 3;
//   return acc;
// }, 0);
// console.log(numOfTrees);

//Part 2
const input = require('./input');
const setRow = row => tree => {
  let [count, right, inc] = tree;
  if (row[right % l] == '#') {
    count += 1;
  }
  right += inc;
  return [count, right, inc];
};
const l = input[0].length;
input.shift();
const trees = input.reduce(
  ({ tree1, tree3, tree5, tree7, tree12 }, row, i) => {
    const countTree = setRow(row);
    if ((i + 1) % 2 == 0) {
      tree12 = countTree(tree12);
    }
    tree1 = countTree(tree1);
    tree3 = countTree(tree3);
    tree5 = countTree(tree5);
    tree7 = countTree(tree7);

    return { tree1, tree3, tree5, tree7, tree12 };
  },
  {
    tree1: [0, 1, 1],
    tree3: [0, 3, 3],
    tree5: [0, 5, 5],
    tree7: [0, 7, 7],
    tree12: [0, 1, 1]
  }
);
console.log(trees);
const { tree1, tree3, tree5, tree7, tree12 } = trees;
console.log(tree1[0] * tree3[0] * tree5[0] * tree7[0] * tree12[0]);
