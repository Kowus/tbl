var debug = require('debug')('tbl:server');
module.exports = (io) => {
  io.on('connection', (socket) => {
    debug(socket.id);
    socket.on('message', (payload) => {
      debug(payload);
      socket.broadcast.emit('data', payload);
    });
  });
};
