const input = require('./input');
// const input = ['F10', 'N3', 'F7', 'R90', 'F11'];
let facing = 'E';
const [north, east] = input.reduce(
  ([north, east], inst) => {
    const [, dir, amt] = inst.match(/(\w)(\d+)/);
    switch (dir) {
      case 'N':
        north += +amt;
        break;
      case 'S':
        north -= +amt;
        break;
      case 'E':
        east += +amt;
        break;
      case 'W':
        east -= +amt;
        break;
      case 'F':
        switch (facing) {
          case 'N':
            north += +amt;
            break;
          case 'S':
            north -= +amt;
            break;
          case 'E':
            east += +amt;
            break;
          case 'W':
            east -= +amt;
            break;

          default:
            break;
        }
        break;
      case 'R': {
        let rot = amt / 90;
        const cards = ['N', 'E', 'S', 'W'];
        let i = cards.indexOf(facing);
        facing = cards[(i + rot) % 4];
        break;
      }
      case 'L': {
        let rot = amt / 90;
        console.log(rot);
        const cards = ['N', 'E', 'S', 'W'];
        let i = cards.indexOf(facing);
        console.log(i);
        facing = cards[(i + 4 - rot) % 4];
        break;
      }
      default:
        break;
    }
    return [north, east];
  },
  [0, 0]
);
console.log(facing);
console.log(north, east);
console.log(Math.abs(north) + Math.abs(east));
