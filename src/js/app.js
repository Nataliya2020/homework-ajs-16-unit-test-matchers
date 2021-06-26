import returnSortHealth from './sortHealth';
import returnHealthStatus from './health';

const statusHealth = returnSortHealth([
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
]);

const getUnitHealthStatus = returnHealthStatus(statusHealth);

const players = document.getElementById('players');

getUnitHealthStatus.forEach((item) => {
  players.insertAdjacentHTML('beforeend', `<div class="health ${item}"></div>`);
});
