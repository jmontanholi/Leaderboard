import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import addScore from './AddScores.js';
import createDom from './createDom.js';
import createGame, { getScores } from './request.js';

createDom();

const submitBtn = document.getElementById('submitBtn');
const leaderboardScores = document.getElementById('leaderboardScores');
const userName = document.getElementById('userName');
const userScore = document.getElementById('userScore');
const refreshBtn = document.getElementById('refreshBtn');

const populate = () => {
  getScores().then((list) => {
    const sortedList = list.sort((a, b) => {
      if (Number(a.score) > Number(b.score)) {
        return -1;
      }
      if (Number(a.score) < Number(b.score)) {
        return 1;
      }
      return 0;
    });
    leaderboardScores.innerHTML = '';
    sortedList.forEach((e) => {
      const li = document.createElement('li');
      li.innerHTML = `
      <p class='player'>${e.user}</p>
      <p class='score'>${e.score}</p>
      `;
      leaderboardScores.appendChild(li);
      userName.value = '';
      userScore.value = '';
    });
  });
};

populate();

submitBtn.addEventListener('click', () => {
  addScore();
});

refreshBtn.addEventListener('click', () => {
  populate();
});

createGame();