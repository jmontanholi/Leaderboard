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

const getScores = () => createGame().then((result) => {
  const scores = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${result}/scores`;
  return fetch(scores)
    .then((response) => response.json())
    .then((json) => json.result);
});

const createScores = (user, score) => createGame().then((result) => {
  const scores = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${result}/scores`;
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
    .then((json) => console.log(json.result));
});

export { createGame as default, getScores, createScores };