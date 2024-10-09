import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';
import cors from 'cors';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true
  }
});

app.use(cors())

app.get('/', (req, res) => {
  res.send('Servidor Express con Socket.io y Arduino')
})

const port = new SerialPort({ path: 'COM8', baudRate: 9600 })

const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }))

parser.on('data', (data: string) => {
  console.log(`Datos recibidos del Arduino: ${data}`);
  try {
    const buttonData = JSON.parse(data.trim());
    if ('lineButton' in buttonData && 'pointButton' in buttonData) {
      console.log('Botones procesados:', buttonData);
      io.emit('buttonStatus', buttonData);
    }
  } catch (err) {
    console.error('Error al parsear JSON:', err);
  }
})

io.on('connection', (socket) => {
  console.log('Cliente conectado');
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

const portNumber = 5050

server.listen(portNumber, () => {
  console.log(`Servidor escuchando en http://localhost:${portNumber}`)
})
