const createGame = async () => {
  const games = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
  const response = await fetch(games, {
    method: 'POST',
    body: JSON.stringify({
      name: 'Montanholi\'s Game',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const result = await response.json();
  return result.result.split(' ')[3];
};

const getScores = async () => {
  const scores = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7MRZkAe2WgnNaEn7ujCD/scores';
  const response = await fetch(scores);
  const result = await response.json();
  return result.result;
};

const createScores = async (user, score) => {
  const scores = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/7MRZkAe2WgnNaEn7ujCD/scores';
  const response = await fetch(scores, {
    method: 'POST',
    body: JSON.stringify({
      user,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const result = await response.json();
  return result;
};

export { createGame as default, getScores, createScores };