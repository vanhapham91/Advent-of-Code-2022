const input = document.querySelector('pre').innerHTML;
const weightPerElf = input
  .split('\n\n')
  .map(elf => elf.split('\n')
    .reduce((acc, curr) => curr !== '' ? Number.parseInt(acc) + Number.parseInt(curr) : 0, 0)
  );
let highestCalories = 0;

weightPerElf.forEach(num => {
  if (num > highestCalories) highestCalories = num;
})

console.log(`The Elf carrying the most Calories is #${weightPerElf.indexOf(highestCalories)} and it's carrying ${highestCalories}`);
