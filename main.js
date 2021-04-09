const $arena = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button')

const baraka = {
  player: 2,
  name: 'Baraka',
  hp: 100,
  img: 'https://static.wikia.nocookie.net/mortalkombat/images/0/0c/A1baraka.gif/revision/latest/scale-to-width-down/64?cb=20091212000438&path-prefix=es',
  weapon: ['Blades', 'Spikes'],
  attack: function() {
    console.log(this.name + ' Fight...');
  }
};

const scorpion = {
  player: 2,
  name: 'Scorpion',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['Kunai', 'Axe', 'Long Sword'],
  attack: function() {
    console.log(this.name + ' Fight...');
  }
};

const subzero = {
  player: 2,
  name: 'Sub-Zero',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['Ice Scepter', 'Kori Blade', 'Ice Daggers'],
  attack: function() {
    console.log(this.name + ' Fight...');
  }
};

const kitana = {
  player: 1,
  name: 'Kitana',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
  weapon: ['Steel Fans', 'Flying Blade', 'Bo Staff'],
  attack: function() {
    console.log(this.name + ' Fight...');
  }
};

const luikang = {
  player: 1,
  name: 'Lui Kang',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/liukang.gif',
  weapon: ['Dragon Sword', 'Nunchaku'],
  attack: function() {
    console.log(this.name + ' Fight...');
  }
};

const sonya = {
  player: 1,
  name: 'Sonya',
  hp: 100,
  img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
  weapon: ['Wind Blade', 'Kali Sticks', 'Greenades', 'Drone'],
  attack: function() {
    console.log(this.name + ' Fight...');
  }
};

function createPlayer(character) {
  const $player = createElement('div', `player${character.player}`);

  const $progress = createElement('div', 'progressbar');

  const $character = createElement('div', 'character');

  const $live = createElement('div', 'life');
  $live.style.width = `${character.hp}%`;

  const $name = createElement('div', 'name');
  $name.innerText = character.name;

  const $apperance = createElement('img');
  $apperance.src = character.img;

  $player.appendChild($progress);
  $player.appendChild($character);
  $character.appendChild($apperance);
  $progress.appendChild($live);
  $progress.appendChild($name);

  return $player;
}

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if(className) {
  $tag.classList.add(className);
  }

  return $tag;
}

function insertPlayer(player) {
  $arena.appendChild(player);
}

let player1 = sonya;
let player2 = baraka;

function changeHP(player) {
  player.hp -= randomNumber();
      
  if(player.hp <= 0) {
    player.hp = 0;
    $randomButton.disabled = true;
  }

  document.querySelector(`.player${player.player} .life`).style.width = `${player.hp}%`;
  $arena.appendChild(playerWin());

}

function randomNumber(min = 1, max = 20) {
  return Math.floor(Math.random()*(max - min) + min);
}

function randomPlayer() {
  return Math.round(Math.random()) ? player1 : player2;
}

function playerLose(name) {
  const $loseTitle = createElement('div', 'loseTitle');
  $loseTitle.innerText = name.name + ' loses!'
  
  return $loseTitle;
}

function playerWin() {
  const $winTitle = createElement('div', 'loseTitle');
  if (player1.hp === 0) {
    $winTitle.innerText = player2.name + ' wins!'
  } else if (player2.hp === 0) {
    $winTitle.innerText = player1.name + ' wins!'  
  }

  return $winTitle;
}

$randomButton.addEventListener('click', function() {
  changeHP(randomPlayer());
  
});

insertPlayer(createPlayer(player1));
insertPlayer(createPlayer(player2));