const input = require('./input');
// const input = ['F10', 'N3', 'F7', 'R90', 'F11'];
let facing = 'E';
let [wnorth, weast] = [1, 10];
const [north, east] = input.reduce(
  ([north, east], inst) => {
    const [, dir, amt] = inst.match(/(\w)(\d+)/);
    switch (dir) {
      case 'N':
        wnorth += +amt;
        break;
      case 'S':
        wnorth -= +amt;
        break;
      case 'E':
        weast += +amt;
        break;
      case 'W':
        weast -= +amt;
        break;
      case 'F':
        north += wnorth * amt;
        east += weast * amt;
        break;
      case 'R': {
        switch (amt / 90) {
          case 1:
            [weast, wnorth] = [wnorth, -weast];
            break;
          case 2:
            [weast, wnorth] = [-weast, -wnorth];
            break;
          case 3:
            [weast, wnorth] = [-wnorth, weast];
            break;
          default:
            break;
        }
        break;
      }
      case 'L': {
        switch (amt / 90) {
          case 1:
            [weast, wnorth] = [-wnorth, weast];
            break;
          case 2:
            [weast, wnorth] = [-weast, -wnorth];
            break;
          case 3:
            [weast, wnorth] = [wnorth, -weast];
            break;
          default:
            break;
        }
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
console.log('north:', north, 'east:', east);
console.log('wnorth:', wnorth, 'weast:', weast);
console.log(Math.abs(north) + Math.abs(east));
