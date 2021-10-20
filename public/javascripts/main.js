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
  // alert('Loaded');
  const socket = io();
  socket.on('connect', () => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });

  socket.on('disconnect', (reason) => {
    // console.log(socket.id); // undefined
    if (reason === 'io server disconnect') {
      // the disconnection was initiated by the server, you need to reconnect manually
      socket.connect();
    }
  });
  socket.on('data', (data) => {
    var img_str = `/images/teams/${data.image}`;
    var logo_box = document.getElementById('team_logo');
    logo_box.setAttribute('src', img_str);
    console.log(data);
  });
};
