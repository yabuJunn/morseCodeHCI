// App.tsx
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

interface buttonStatusType {
  lineButton: number,
  pointButton: number

}

const App: React.FC = () => {
  const [buttonStatus, setButtonStatus] = useState<buttonStatusType>()

  useEffect(() => {
    // Conectar al servidor Socket.IO
    const socket = io('http://localhost:5050'); // Cambia la URL si es necesario

    // Escuchar el evento 'buttonStatus'
    socket.on('buttonStatus', (data) => {
      console.log('Datos recibidos del servidor:', data);
      // Aquí puedes hacer algo con los datos recibidos
      setButtonStatus(data)
    });

    // Limpiar la conexión cuando el componente se desmonte
    return () => {
      socket.disconnect();
    };
  }, []);


  if (buttonStatus?.lineButton === 1) {
    return <>
      <div>
        <h1>-</h1>
        <p>Mira la consola para ver los datos recibidos del servidor.</p>
      </div>
    </>
  }

  if (buttonStatus?.pointButton === 1) {
    return <>
      <div>
        <h1>.</h1>
        <p>Mira la consola para ver los datos recibidos del servidor.</p>
      </div>
    </>
  }

  return <>
    <div>
      <h1>Morse code reader react</h1>
      <p>Mira la consola para ver los datos recibidos del servidor.</p>
    </div>
  </>

};

export default App;
