const express = require('express');
const router = express.Router();
let i = 2000;
router.get('/', (req, res) => {
  res.send('api V1');
});

router.get('/stream', (req, res) => {
  req.socket.setTimeout((i *= 6));
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  });
  res.write('\n');

  /**
   * Timeout timer, send a comment line every 20 seconds
   * */
  var timer = setInterval(function () {
    res.write(':' + '\n');
  }, 20000);

  // if some event
  // res.write('data:' + cursor + '\n\n');

  /**
   * When the request is closed, we search through the open connections and remove this connection.
   * */
  req.on('close', function () {
    clearTimeout(timer);
    client.end();
  });
});
module.exports = router;
