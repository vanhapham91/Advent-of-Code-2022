// Handle input
const input = document.querySelector('pre').innerHTML.split('\n').slice(0, -1);
const pairs = input
  .map(pair => pair
    .split(',')
    .map(elf => elf.split('-')
      .map(assignment => Number.parseInt(assignment))));

// Solution
const result = pairs.reduce((count, [firstElf, secondElf]) => {
  return checkContainmentStatus(firstElf, secondElf) ? count + 1 : count;
}, 0);

console.log(result);

// Helper Function
function checkContainmentStatus(arr1, arr2) {
  return isArrContained(arr1, arr2) || isArrContained(arr2, arr1);
}

function isArrContained(child, parent) {
  return child[0] >= parent[0] && child[1] <= parent[1];
}
