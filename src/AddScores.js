const userName = document.getElementById('userName');
const userScore = document.getElementById('userScore');
const error = document.getElementById('error');
const submitBtn = document.getElementById('submitBtn');

export default function addScore(scoreList) {
  if (userName.value.trim() === '' || userScore.value.trim() === '') {
    error.classList.remove('d-none');
    error.classList.add('d-grid');
    submitBtn.classList.remove('submit');
  } else {
    const score = { name: userName.value, score: userScore.value };
    scoreList.push(score);
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