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
    name: 'Camping Noobs',
    image: 'camping.png',
  },
  {
    name: 'Deadeye',
    image: 'deadeye.jpg',
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
};

function btn_clicked(e) {
  console.log(e.target.id);
}
