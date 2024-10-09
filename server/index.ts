// server/index.ts
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';
import cors from 'cors'; // Importa CORS

// Configurar Express y el servidor HTTP
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", // Cambia esto a la URL de tu cliente
    methods: ["GET", "POST"],
    credentials: true // Permite enviar cookies o cabeceras de autenticación
  }
});

// Usar CORS como middleware
app.use(cors());

// Ruta simple para verificar que el servidor está corriendo
app.get('/', (req, res) => {
  res.send('Servidor Express con Socket.io y Arduino');
});

// Configurar el puerto serial (ajusta el puerto según tu configuración)
const port = new SerialPort({ path: 'COM8', baudRate: 9600 }); // Ajusta el puerto según tu sistema

// Crear un parser para leer datos por línea
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

// Cuando recibimos datos del Arduino
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
});

// Configurar Socket.io para cuando los clientes se conecten
io.on('connection', (socket) => {
  console.log('Cliente conectado');
  socket.on('disconnect', () => {
    console.log('Cliente desconectado');
  });
});

const portNumber = 5050;

server.listen(portNumber, () => {
  console.log(`Servidor escuchando en http://localhost:${portNumber}`);
});
