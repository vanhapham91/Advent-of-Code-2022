// Handle input
const input = document.querySelector('pre').innerHTML.split('\n').slice(0, -1);
const pairs = input
  .map(pair => pair
    .split(',')
    .map(elf => elf.split('-')
      .map(assignment => Number.parseInt(assignment))));


// Solution
const result = pairs.reduce((count, [elf1, elf2]) => {
  return isOverlap(elf1, elf2) ? count + 1 : count;
}, 0)

console.log(result);

// Helper function
function isOverlap(a, b) {
  // a & b have type number array
  // Eg: [1,3]
  return (a[0] >= b[0] && a[0] <= b[1]) || (b[0] >= a[0] && b[0] <= a[1]);

}
