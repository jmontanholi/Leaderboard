const createGame = () => {
  const games = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
  return fetch(games, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Montanholi\'s Game',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json.result.split(' ')[3]);
};

const getScores = () => {
  const scores = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/oqptEhnYZtDs1PlRT1tV/scores';
  return fetch(scores)
    .then((response) => response.json())
    .then((json) => json.result);
};

const createScores = (user, score) => {
  const scores = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/oqptEhnYZtDs1PlRT1tV/scores';
  return fetch(scores, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => json.result);
};

export { createGame as default, getScores, createScores };