const baraka = {
  name: 'Baraka',
  hp: 100,
  img: 'https://www.fightersgeneration.com/nz2/char/baraka-mk-hd-stance-cancelled-project.GIF',
  weapon: ['Blades', 'Spikes'],
  attack: function() {
    console.log(this.name + ' Fight...');
  }
};

const scorpion = {
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Kunai', 'Axe', 'Long Sword'],
  attack: function() {
    console.log(this.name + ' Fight...');
  }
};

const subzero = {
  name: 'Sub-Zero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['Ice Scepter', 'Kori Blade', 'Ice Daggers'],
  attack: function() {
    console.log(this.name + ' Fight...');
  }
};

const kitana = {
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['Steel Fans', 'Flying Blade', 'Bo Staff'],
  attack: function() {
    console.log(this.name + ' Fight...');
  }
};

const luikang = {
  name: 'Lui Kang',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: ['Dragon Sword', 'Nunchaku'],
  attack: function() {
    console.log(this.name + ' Fight...');
  }
};

const sonya = {
  name: 'Sonya Blade',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ['Wind Blade', 'Kali Sticks', 'Greenades', 'Drone'],
  attack: function() {
    console.log(this.name + ' Fight...');
  }
};

function createPlayer(playerNumber, character) {
  const $player = document.createElement('div');
  $player.classList.add(`${playerNumber}`);

  const $progress = document.createElement('div');
  $progress.classList.add('progressbar');

  const $character = document.createElement('div');
  $character.classList.add('character');

  const $live = document.createElement('div');
  $live.classList.add('live');
  $live.innerText = character.hp;
  $live.style.width = '100%';

  const $name = document.createElement('div');
  $name.classList.add('name');
  $name.innerText = character.name;

  const $apperance = document.createElement('img');
  $apperance.src = character.img;

  $player.appendChild($progress);
  $player.appendChild($character);
  $character.appendChild($apperance);
  $progress.appendChild($live);
  $progress.appendChild($name);

  return $player;
}


function insertPlayer(player) {
  const $arena = document.querySelector('.arenas');
  $arena.appendChild(player);
}

insertPlayer(createPlayer('player1', sonya));
insertPlayer(createPlayer('player2', baraka));

