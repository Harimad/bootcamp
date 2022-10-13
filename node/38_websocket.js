const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const app = express();
const httpServer = createServer(app);

const corsOptions = {
  origin: 'http://localhost:8080',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', socket => {
  socket.on('disconnect', () => {});

  socket.on('client2server', data => {
    console.log(data);
  });
});

const sendMsgToClient = () => {
  setInterval(() => {
    io.emit('server2client1', {
      code: `item${Math.round(Math.random() * 1000)}`,
      price: Math.round(Math.random() * 1000),
    });
  }, 1000);
};

app.get('/socket', (req, res) => {
  sendMsgToClient();
  res.send('서버로 부터 메시지 전송 시작');
});

httpServer.listen(3000, () => {
  console.log('서버가 포트 3000번으로 시작 되었습니다.');
});
