
// Create character mapping object
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charMapping = {};

uppercase.split('').forEach((c, i) => charMapping[c] = lowercase.length + i + 1);
lowercase.split('').forEach((c, i) => charMapping[c] = i + 1);

// Handle input
const input = document.querySelector('pre').innerHTML;
const rucksacks = input.split('\n');


// Solution
const result = rucksacks.reduce((sum, rucksack) => {
  const rucksackArr = divideRucksack(rucksack);
  const point = getRuckSackPriorityPoint(rucksackArr);

  return Number.isInteger(point) ? sum + point : 0;
}, 0);

console.log(result);

// Support functions
function getRuckSackPriorityPoint(rucksackArr) {
  const similarChar = rucksackArr[0].find(c => rucksackArr[1].find(c2 => c === c2));

  return charMapping[similarChar];
}

function divideRucksack(rucksack) {
  const middleCharIndex = Math.round(rucksack.length/2);
  const firstHalf = rucksack.slice(0, middleCharIndex);
  const secondHalf = rucksack.slice(middleCharIndex, rucksack.length);

  return [firstHalf.split(''), secondHalf.split('')];
}
