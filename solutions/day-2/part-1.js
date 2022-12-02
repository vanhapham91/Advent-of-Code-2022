const DATA = {
  'X': {
    score: 1,
    desc: 'Rock',
    winTo: 'Z',
  },
  'Y': {
    score: 2,
    desc: 'Paper',
    winTo: 'X',
  },
  'Z': {
    score: 3,
    desc: 'Scissor',
    winTo: 'Y',
  }
}

const choiceMapping = {
  'A': 'X',
  'B': 'Y',
  'C': 'Z'
}

const input = document.querySelector('pre').innerHTML;
const rawRoundData = input.split('\n').map(round => round.split(' '));

rawRoundData.pop(); // Remove empty array;

const rounds = rawRoundData.map(round => {
  let newRound = [...round];

  newRound[0] = choiceMapping[round[0]];

  return newRound;
})

const result = rounds.reduce((score, currRound) => {
  return score += getScorePerRound(currRound);
}, 0)

console.log(result)

function getScorePerRound(round) {
  let roundScore = 0;
  roundScore += DATA[round[1]].score;

  if (round[0] === round[1]) {
    roundScore += 3;
  }

  round[0] === DATA[round[1]].winTo ? roundScore += 6 : roundScore +=0;

  return roundScore;
}
