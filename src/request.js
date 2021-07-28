const createGame = () => {
  const promise = new Promise((resolve, reject) => {
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
  const promise = new Promise((resolve, reject) => {
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

// const setScore = () => {
//   const scores = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;
//   const scoreRequest = new XMLHttpRequest();
//   scoreRequest.open('POST', scores);

//   scoreRequest.onload = () => {
//     console.log(JSON.parse(scoreRequest.response));
//   };

//   scoreRequest.setRequestHeader('Content-type', 'application/json');

//   const data = [{ user: 'Montanholi1', score: 9081 }, { user: 'Montanholi2', score: 9081 }];
//   scoreRequest.send(JSON.stringify(data[0]));
// };

export { createGame as default, getScore };