const input = require('./input');
// const input = [
//   'L.LL.LL.LL',
//   'LLLLLLL.LL',
//   'L.L.L..L..',
//   'LLLL.LL.LL',
//   'L.LL.LL.LL',
//   'L.LLLLL.LL',
//   '..L.L.....',
//   'LLLLLLLLLL',
//   'L.LLLLLL.L',
//   'L.LLLLL.LL'
// ];
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
      if (r > 0) {
        neighbors.push(grid[r - 1][c - 1]);
        neighbors.push(grid[r - 1][c + 1]);
        neighbors.push(grid[r - 1][c]);
      }
      neighbors.push(row[c - 1]);
      neighbors.push(row[c + 1]);
      if (r < grid.length - 1) {
        neighbors.push(grid[r + 1][c]);
        neighbors.push(grid[r + 1][c - 1]);
        neighbors.push(grid[r + 1][c + 1]);
      }
      const occ = countNeighbors(neighbors);
      if (space == 'L' && occ == 0) {
        changed++;
        return '#';
      }
      if (space == '#' && occ >= 4) {
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
