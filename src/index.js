import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import addScore from './AddScores.js';
import createDom from './createDom.js';

createDom();

const scoreList = [{ name: 'joão vítor', score: '252' }, { name: 'Mario', score: '591' }, { name: 'John Wick', score: '209' }];

const submitBtn = document.getElementById('submitBtn');
const leaderboardScores = document.getElementById('leaderboardScores');
const userName = document.getElementById('userName');
const userScore = document.getElementById('userScore');

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
  sortedList.forEach((e) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <p class='player'>${e.name}</p>
    <p class='score'>${e.score}</p>
    `;
    leaderboardScores.appendChild(li);
    userName.value = '';
    userScore.value = '';
  });
};

populate();

submitBtn.addEventListener('click', () => {
  addScore(scoreList);
  populate();
});
