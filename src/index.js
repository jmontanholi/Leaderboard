import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import addScore from './AddScores.js';
import createDom from './createDom.js';
import { getScore } from './request.js';

createDom();

const scoreList = [];

const submitBtn = document.getElementById('submitBtn');
const leaderboardScores = document.getElementById('leaderboardScores');
const userName = document.getElementById('userName');
const userScore = document.getElementById('userScore');
const refreshBtn = document.getElementById('refreshBtn');

const populate = () => {
  const sortedList = scoreList.sort((a, b) => {
    if (a.score > b.score) {
      return -1;
    }
    if (a.score < b.score) {
      return 1;
    }
    return 0;
  });
  leaderboardScores.innerHTML = '';
  getScore().then((result) => {
    const list = JSON.parse(result);
    list.result.forEach((e) => {
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
  addScore(scoreList);
  populate();
});
