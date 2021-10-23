const teams = [
  {
    name: 'Area 57',
    image: 'ar57.jpeg',
  },
  {
    name: 'ASG',
    image: 'asg.jpeg',
  },
  {
    name: 'DBC',
    image: 'DBC.png',
  },
  {
    name: 'Prototype',
    image: 'prototype.jpg',
  },
  {
    name: 'Valorant E-Sports',
    image: 'valorant.jpeg',
  },
];

window.onload = function () {
  const socket = io();
  socket.on('connect', () => {
    console.log(socket.id);
  });
  // alert('Loaded');
  teams.forEach((team, index) => {
    let button = document.createElement('button');
    button.id = `logo_${index}`;
    button.innerText = team.name;
    console.log(team);
    button.addEventListener('click', (e) => {
      var active_team = document.getElementById('active_team');
      active_team.innerHTML = team.name;
      socket.emit('message', team);
    });
    let button_zone = document.getElementById('button-zone');
    button_zone.appendChild(button);
  });

  socket.on('disconnect', (reason) => {
    // console.log(socket.id); // undefined
    if (reason === 'io server disconnect') {
      // the disconnection was initiated by the server, you need to reconnect manually
      socket.connect();
    }
  });
  // SND
  var snd_w = document.getElementById('snd-w');
  var snd_l = document.getElementById('snd-l');
  snd_w.addEventListener('click', (e) => {
    socket.emit('update_snd', 'W');
  });
  snd_l.addEventListener('click', (e) => {
    socket.emit('update_snd', 'L');
  });

  // HP
  var hp_w = document.getElementById('hp-w');
  var hp_l = document.getElementById('hp-l');
  hp_w.addEventListener('click', (e) => {
    socket.emit('update_hp', 'W');
  });
  hp_l.addEventListener('click', (e) => {
    socket.emit('update_hp', 'L');
  });

  // DMI
  var dmi_w = document.getElementById('dmi-w');
  var dmi_l = document.getElementById('dmi-l');
  dmi_w.addEventListener('click', (e) => {
    socket.emit('update_dmi', 'W');
  });
  dmi_l.addEventListener('click', (e) => {
    socket.emit('update_dmi', 'L');
  });

  var rst = document.getElementById('rst');
  rst.addEventListener('click', (e) => {
    socket.emit('reset_scores', '--');
  });
};

function btn_clicked(e) {
  console.log(e.target.id);
}
