import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import addScore from './AddScores.js';

const scoreList = [];

const submitBtn = document.getElementById('submitBtn');
const leaderboardScores = document.getElementById('leaderboardScores');

submitBtn.addEventListener('click', () => {
  addScore(scoreList);
});

const populate = () => {
  scoreList.forEach((e) => {
    const li = document.createElement('li');
    li.innerHTML = `
    <p class='player'>${e.name}</p>
    <p class='score'>${e.score}</p>
    `;
    leaderboardScores.appendChild(li);
  });
};

populate();