const createGame = () => {
  const promise = new Promise((resolve) => {
    const games = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
    const xhr = new XMLHttpRequest();

    xhr.open('POST', games);

    xhr.responseType = 'json';

    xhr.onload = () => {
      resolve(xhr.response.result.split(' ')[3]);
    };

    xhr.setRequestHeader('Content-type', 'application/json');

    const data = { name: 'Montanholi\'s Game' };
    xhr.send(JSON.stringify(data));
  });
  return promise;
};

const getScore = () => {
  const promise = new Promise((resolve) => {
    createGame().then((responseData) => {
      const scores = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${responseData}/scores`;
      const scoreRequest = new XMLHttpRequest();
      scoreRequest.open('GET', scores);

      scoreRequest.onload = () => {
        resolve(scoreRequest.response);
      };

      scoreRequest.setRequestHeader('Content-type', 'application/json');
      scoreRequest.send();
    });
  });
  return promise;
};

const setScore = (user, score, func) => {
  const promise = new Promise((resolve) => {
    createGame().then((responseData) => {
      const scores = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${responseData}/scores`;
      const scoreRequest = new XMLHttpRequest();
      scoreRequest.open('POST', scores);

      scoreRequest.onload = () => {
        resolve(scoreRequest.response);
      };

      scoreRequest.setRequestHeader('Content-type', 'application/json');

      const data = { user, score };
      scoreRequest.send(JSON.stringify(data));
    });
  });
  func();
  return promise;
};

export { createGame as default, getScore, setScore };