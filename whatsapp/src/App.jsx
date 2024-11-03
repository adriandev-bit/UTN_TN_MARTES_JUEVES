import { useState } from 'react'
import './App.css';


function App() {
  const historial = [
    {
      id: '1',
      emisor: 'Tu',
      texto: 'Hola, como andas?',
      hora: '22.10',
      status: 'visto'
    },
    {
      id: '2',
      emisor: 'Usuario',
      texto: 'Bien y vos?',
      hora: '22.11',
      status: 'no-visto'
    },
    {
      id: '3',
      emisor: 'Tu',
      texto: 'Todo bien, estaba esperando tu mensaje',
      hora: '22.11',
      status: 'no-recibido'
    },
    // {
    //   id: '4',
    //   emisor: 'Usuario',
    //   texto: 'Bueno aqui estoy',
    //   hora: '22.12',
    //   status: 'no-visto'
    // }
  ]

  return (
<div className='contenedor-chat'>
    
  {historial.map (chat => (


  <div key={chat.id} className={`chat ${chat.emisor === 'Tu' ? '' : 'move-right'}`}>
    <div><span>{chat.emisor}</span></div>
    <span>{chat.texto}</span>
    <div className='chat-footer'>
      <span>hora: {chat.hora}</span>
      <span>{chat.status === 'no-visto'? 
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/></svg>
        : chat.status === 'visto'?
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M268-240 42-466l57-56 170 170 56 56-57 56Zm226 0L268-466l56-57 170 170 368-368 56 57-424 424Zm0-226-57-56 198-198 57 56-198 198Z"/></svg>
        : 
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
      }</span>
    </div>
  </div>
))}

<div className='send-message'>
<form action="">
    <input 
        type="text" 
        placeholder="Escribe aqui..." 
        required 
    /> 
</form>
<button type="submit">Send</button>
</div>
  </div>
);
}

export default App;
