const input = require('./input');
input.sort((a, b) => a - b);

//PART 1
// //both of these starts at 1 because i know 1 is in my input and i know the last one is a 3
// let count1 = 1;
// let count3 = 1;
// for (let i = 1; i < input.length; i++) {
//   const dif = input[i] - input[i - 1];
//   if (dif == 1) {
//     count1 += 1;
//   }
//   if (dif == 3) {
//     count3 += 1;
//   }
// }
// console.log(count1 * count3);

//part 2
let count1 = 0;
let perms = [];
input.unshift(0);
input.push(input[input.length - 1] + 3); // have to push the last one in because i need it to be able to get that last permutation if it ends on a run this is what bit me for HOURS
//I can start at 1 because i know 1 is in my input. if it wasn't this would probably be different
for (let i = 1; i < input.length; i++) {
  const dif = input[i] - input[i - 1];
  if (dif == 1) {
    count1 += 1;
  } else {
    //all these numbers come from counting how many permutations come from a run of 3, 4, and 5 more notes under the problem
    count1 += 1;
    if (count1 == 3) {
      perms.push(2);
    }
    if (count1 == 4) {
      perms.push(4);
    }
    if (count1 == 5) {
      perms.push(7);
    }
    count1 = 0;
  }
}
const total = perms.reduce((acc, p) => acc * p, 1);
console.log(total);

/* 
I was able to figure out how many permutations come from a run of numbers becuase of a couple 
observations i made on paper and pencil

a run of 1 can't change becuase then it would break the gap of 3 rule ( if it didn't break that rule then it wouldn't be a run of 1)
a run of 2 could technically change if there was something like 2,3,5,6. there could be some permutations here depending on what is before and after the run
fortunately i didn't have too big of an input and coud scan it (or write some code) to tell me that everywhere there was a gap, it was a gap of 3
(this might have also been in the problem description but i don't think it explicitly said it had to be a gap of three, just that it could be)
for a run of 3, 4, & 5, I thought of it like binary the numbers on the end can't change because that would break the gap of three rule
so for 3 there is really 1 bit, that number can not be there(0), or be there(1) and that is 2 permutations
for 4 there is 2 bits so 00, 01, 10, 11 thats 4 permutations
and for 5 there are 3 bits which would be 8, but with 5 you can't have the 000 option becuase then that would break the gap of 3 rule so its actually 7
then you just multiply them together because if you have 4 permutations for a run and then 2 for another, each of those 4 has to represent the other 2 mutations
*/
