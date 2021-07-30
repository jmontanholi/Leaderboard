import { createScores } from './request.js';

const userName = document.getElementById('userName');
const userScore = document.getElementById('userScore');

const addScore = () => {
  const error = document.getElementById('error');
  const userName = document.getElementById('userName');
  const userScore = document.getElementById('userScore');
  const submitBtn = document.getElementById('submitBtn');

  if (userName.value.trim() === '' || userScore.value.trim() === '') {
    error.classList.remove('d-none');
    error.classList.add('d-grid');
    submitBtn.classList.remove('submit');
  } else {
    createScores(userName.value, Number(userScore.value));
    error.classList.add('d-none');
    error.classList.remove('d-grid');
    submitBtn.classList.add('submit');
  }
};

const removeError = () => {
  const error = document.getElementById('error');
  const submitBtn = document.getElementById('submitBtn');
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
};

export { addScore as default, removeError };
