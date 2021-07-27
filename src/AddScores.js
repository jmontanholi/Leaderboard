const userName = document.getElementById('userName');
const userScore = document.getElementById('userScore');
const error = document.getElementById('error');
const submitBtn = document.getElementById('submitBtn');
const leaderboardScores = document.getElementById('leaderboardScores');

export default function addScore(scoreList) {
  if (userName.value.trim() === '' || userScore.value.trim() === '') {
    error.classList.remove('d-none');
    error.classList.add('d-grid');
    submitBtn.classList.remove('submit');
  } else {
    const score = { name: userName.value, score: userScore.value };
    scoreList.push(score);
    const li = document.createElement('li');
    li.innerHTML = `
    <p class='player'>${userName.value}</p>
    <p class='score'>${userScore.value}</p>
    `;
    leaderboardScores.appendChild(li);
    userName.value = '';
    userScore.value = '';
  }
}

userName.addEventListener('change', () => {
  error.classList.remove('d-grid');
  error.classList.add('d-none');
  submitBtn.classList.add('submit');
});

userScore.addEventListener('change', () => {
  error.classList.remove('d-grid');
  error.classList.add('d-none');
  submitBtn.classList.add('submit');
});