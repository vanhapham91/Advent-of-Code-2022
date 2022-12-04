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
const rucksacksByGroup = [];
let tempArr = [];

rucksacks.forEach((rucksack, index) => {
  tempArr.push(rucksack.split(''));
  if ((index + 1) % 3 === 0) {
    rucksacksByGroup.push(tempArr);
    tempArr = [];
  }
})

const result = rucksacksByGroup.reduce((sum, group) => {
  return sum + getPointByGroup(group);
}, 0);

console.log(result);


// Support functions
function getPointByGroup(rucksackGroup) {
  const [
    first,
    second,
    third
  ] = rucksackGroup;

  const char = first.find(c => {
    const existInSecond = second.find(cc => c === cc);
    const existInThird = third.find(cc => c === cc);

    return existInSecond && existInThird;
  })

  return charMapping[char];
}
