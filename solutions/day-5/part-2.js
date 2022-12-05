// Handle input
const input = document.querySelector('pre').innerHTML.split('\n').slice(0, -1);
const separator = input.indexOf('');
const numOfStack = Number.parseInt(input[separator - 1].split(' ').filter(e => e !== '').pop());

// Convert stack data
const stacks = getStacks(input);

// Convert instruction data
const instructions = getInstructions(input);

// Solution
instructions.forEach(([amount, from, to]) => {
  const cratesToMove = stacks[from].splice(stacks[from].length - amount);
  cratesToMove.forEach(crate => stacks[to].push(crate));
})

console.log(getMessage(stacks));

// Helper functions
function getMessage(stacks) {
  return stacks.reduce((msg, stack) => `${msg}${stack.pop().split('')[1]}`, '');
}

function transformStack(stackRaw) {
  let tempStack = [];
  // TODO: Hacky - Need to replace with Regex
  for (let i = 0; i < stackRaw.length; i++) {
    if (stackRaw[i] === '' && stackRaw[i+1] === '' && stackRaw[i+2] === '') {
      i += 3;
    }
    tempStack.push(stackRaw[i]);
  }

  return tempStack;
}

function getInstructions(input) {
  // Instruction array will have 3 elements (aka params): amount, from, to
  const instructionsRaw = input.slice(separator + 1);

  return instructionsRaw
    .map(instruction => instruction
      .split(' '))
    .map(instruction => {
      const amount = Number.parseInt(instruction[1]);
      const from = Number.parseInt(instruction[3]) - 1;
      const to = Number.parseInt(instruction[5]) - 1;

      return [amount, from, to];
    });
}

function getStacks(input) {
  const stacksRaw = input.slice(0, separator - 1).map(stackRaw => transformStack(stackRaw.split(' ')));
  const stacks = [];

  for (let i = 0; i < numOfStack; i++) {
    const stack = [];
    stacksRaw.forEach(col => {
      stack.push(col[i]);
    });
    stack.reverse();
    stacks.push([...stack]);
  }


  return stacks.map(stack => { // Remove empty els
    if (stack.indexOf('') > -1) {
      stack.splice(stack.indexOf(''));
    }

    return stack;
  });
}

