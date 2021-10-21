var debug = require('debug')('tbl:server');
module.exports = (io) => {
  io.on('connection', (socket) => {
    debug(socket.id);
    socket.on('message', (payload) => {
      debug(payload);
      socket.broadcast.emit('data', payload);
    });
    socket.on('update_snd', (payload) => {
      debug(payload);
      socket.broadcast.emit('update_snd', payload);
    });
    socket.on('update_hp', (payload) => {
      debug(payload);
      socket.broadcast.emit('update_hp', payload);
    });
    socket.on('update_dmi', (payload) => {
      debug(payload);
      socket.broadcast.emit('update_dmi', payload);
    });
    socket.on('reset_scores', (payload) => {
      socket.broadcast.emit('reset_scores', payload);
    });
  });
};
