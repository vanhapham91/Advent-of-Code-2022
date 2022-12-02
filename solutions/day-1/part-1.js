const input = document.querySelector('pre').innerHTML;
const weightPerElf = input
  .split('\n\n')
  .map(elf => elf.split('\n')
    .reduce((acc, curr) => curr !== '' ? Number.parseInt(acc) + Number.parseInt(curr) : 0, 0)
  );

// PART 1
let highestCalories = 0;

weightPerElf.forEach(num => {
  if (num > highestCalories) highestCalories = num;
})

console.log(`The Elf carrying the most Calories is #${weightPerElf.indexOf(highestCalories)} and it's carrying ${highestCalories}`);



// PART 2
let firstElf = 0;
let secondElf = 0;
let thirdElf = 0;

weightPerElf.forEach(num => {
  if (num > firstElf) {
    thirdElf = secondElf;
    secondElf = firstElf;
    firstElf = num;
  } else if (num > secondElf && num < firstElf) {
    thirdElf = secondElf;
    secondElf = num;
  } else if (num > thirdElf && num < secondElf) {
    thirdElf = num;
  }
})

console.log(`Top three Elves carrying the most Calories: ${firstElf + secondElf + thirdElf}`);

