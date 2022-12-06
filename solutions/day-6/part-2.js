// Handle input
const datastreamBuffer = document.querySelector('pre').innerHTML.split('');
datastreamBuffer.pop();

// Solution
console.log(getMarker(datastreamBuffer, 14));

// Helper function

function getMarker(input, sequenceRule) {
  let result;

  for (let i = 0; i < input.length; i++) {
    const range = input.slice(i, i + sequenceRule);
    if (checkIsArrUnique(range)) {
      result = i + sequenceRule;
      break;
    }
  }

  return result;
}

function checkIsArrUnique(arr) {
  const set = new Set(arr);
  return set.size === arr.length;
}

