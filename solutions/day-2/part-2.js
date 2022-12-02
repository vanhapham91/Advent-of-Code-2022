const scoreByChoice = {
  'A': 1,
  'B': 2,
  'C': 3
}

const scoreByResult = {
  'X': 0,
  'Y': 3,
  'Z': 6
}

const rules = {
  'A': {
    winTo: 'C',
    loseTo: 'B',
  },
  'B': {
    winTo: 'A',
    loseTo: 'C',
  },
  'C': {
    winTo: 'B',
    loseTo: 'A',
  }
}


const input = document.querySelector('pre').innerHTML;
const rounds = input.split('\n').map(round => round.split(' '));

rounds.pop(); // Remove empty array;

const result = rounds.reduce((score, currRound) => {
  return score += getScorePerRound(currRound);
}, 0)

console.log(result);

function getScorePerRound(round) {
  let roundScore = 0;

  roundScore += scoreByResult[round[1]];

  if (round[1] === 'Y') return roundScore += scoreByChoice[round[0]];

  round[1] === 'X' ? roundScore += scoreByChoice[rules[round[0]].winTo]
    : roundScore += scoreByChoice[rules[round[0]].loseTo];

  return roundScore;
}


