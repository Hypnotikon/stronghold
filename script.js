import { array, global, average } from './data.js';
import { time } from './time.js';

function renderGames() {
  let container = document.querySelector('.container');
  container.innerHTML = null;
  for (let i = 0; i < array.length; i++) {
    let data = array[i];
    let active = null;
    if (data.win) {
      active = 'win';
    }
    let html = `<div class="card ${active}">
<p>Bombers<span>${data.bomber}</span></p>
<p>Archers<span>${data.archer}</span></p>
<p>Box<span>${data.box}</span></p>
<p>Monika Finish<span>${data.monikaFinisher}</span></p>
<p>Our Score<span>${data.scoreTeam}</span></p>
<p>Oponent Score<span>${data.scoreOponent}</span></p>
<p>Time<span>${time(data.time)}</span></p>
<p>Win<span>${data.win}</span></p>
</div>`;
    container.innerHTML = container.innerHTML + html;
  }
}

function renderSummary() {
  let container = document.querySelector('.container');
  let data = global;

  let html = `<div class="card summary">
  <p>Games<span>${data.games}</span></p>
<p>Bombers<span>${data.bomber}</span></p>
<p>Archers<span>${data.archer}</span></p>
<p>Box<span>${data.box}</span></p>
<p>Monika Finish<span>${data.monikaFinisher}</span></p>
<p>Our Score<span>${data.scoreTeam}</span></p>
<p>Oponent Score<span>${data.scoreOponent}</span></p>
<p>Time<span>${time(data.time)}</span></p>
<p>Win<span>${data.win}</span></p>
</div>`;
  container.innerHTML = html;
}
let games = document.querySelector('.games');
let summary = document.querySelector('.summary');
document.querySelector(
  '.average'
).innerHTML = `<p>Archers per game in average: <span>${average.archer}</span></p>
<p>Bombers per game in average: <span>${average.bomber}</span></p>`;

games.addEventListener('click', () => {
  renderGames();
});
summary.addEventListener('click', () => {
  renderSummary();
});
