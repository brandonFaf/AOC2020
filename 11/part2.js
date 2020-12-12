const input = require('./input');

const findEmptySeat = (grid, r, c, rInc, cInc) => {
  while (true) {
    r += rInc;
    c += cInc;
    if (r < 0 || r > grid.length - 1) {
      return undefined;
    }
    const space = grid[r][c];
    if (space != '.') {
      return space;
    }
  }
};
const countNeighbors = neighbors => {
  return neighbors.reduce((acc, n) => {
    if (n == '#') {
      acc++;
    }
    return acc;
  }, 0);
};
let grid = input.map(l => l.split(''));
let changed;
while (changed != 0) {
  changed = 0;

  grid = grid.map((row, r) => {
    return row.map((space, c) => {
      if (space == '.') {
        return '.';
      }
      const neighbors = [];
      neighbors.push(findEmptySeat(grid, r, c, -1, -1));
      neighbors.push(findEmptySeat(grid, r, c, -1, 1));
      neighbors.push(findEmptySeat(grid, r, c, -1, 0));
      neighbors.push(findEmptySeat(grid, r, c, 0, -1));
      neighbors.push(findEmptySeat(grid, r, c, 0, 1));
      neighbors.push(findEmptySeat(grid, r, c, 1, 0));
      neighbors.push(findEmptySeat(grid, r, c, 1, -1));
      neighbors.push(findEmptySeat(grid, r, c, 1, 1));
      const occ = countNeighbors(neighbors);
      if (space == 'L' && occ == 0) {
        changed++;
        return '#';
      }
      if (space == '#' && occ >= 5) {
        changed++;
        return 'L';
      }
      return space;
    });
  });
}
const occ = grid.reduce(
  (acc, row) => acc + row.reduce((acc, s) => (s == '#' ? acc + 1 : acc), 0),
  0
);

console.log('occ:', occ);
