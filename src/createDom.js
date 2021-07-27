const createDom = () => {
  const body = document.getElementById('body');
  body.innerHTML = '';
  // title
  const h1 = document.createElement('h1');
  h1.innerHTML = 'Leaderboard';
  h1.classList.add('title');
  body.appendChild(h1);
  // outer div
  const div1 = document.createElement('div');
  div1.classList.add('d-flex');
  body.appendChild(div1);
  // show section
  const showSection = document.createElement('section');
  showSection.classList.add('leaderboard-show');
  div1.appendChild(showSection);
  // show section content
  const showSectionDiv1 = document.createElement('div');
  const showSectionDiv2 = document.createElement('div');

  showSectionDiv1.classList.add('leaderboard-title', 'd-flex', 'justify-content-between');
  showSectionDiv2.classList.add('scores-div');
  showSectionDiv1.innerHTML = `
    <h2 class="fw-bold fs-1">Recent scores</h2>
    <button class='button' id='refreshBtn'>Refresh</button>
  `;

  showSectionDiv2.innerHTML = `
    <ul class="leaderboard-scores" id='leaderboardScores'></ul>
  `;
  showSection.appendChild(showSectionDiv1);
  showSection.appendChild(showSectionDiv2);

  // form section
  const form = document.createElement('section');
  form.classList.add('leaderboard-form');
  form.setAttribute('id', 'form');
  div1.appendChild(form);
  form.innerHTML = `
    <div class="leaderboard-title d-flex justify-content-between">
      <h2 class="fw-bold fs-1">Add your score</h2>
    </div>
    <label for="userName">Your name</label>
    <input class='text-center' type="text" name="username" id="userName" placeholder="e.g: John Wick">
    <label class='mt-3' for="userScore">Your score</label>
    <input class='text-center' type="number" name="userscore" id="userScore" placeholder="e.g: 209">
    <div class="d-flex justify-content-between align-items-center">
      <p class="d-none error m-0" id='error'>Invalid Input!</p>
      <input class='mt-3 button submit' type="submit" name="submitBtn" id="submitBtn" value='Submit'>
    </div>
  `;
};

export default createDom;