import React from 'react';
import './App.css'

const contactos = [
  {
    nombre: "Adrian",
    avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07N8G6DYQZ-9e6244637e7d-72",
    status: "Desconectado"
  },
  {
    nombre: "Angela",
    avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07N8G6DYQZ-9e6244637e7d-72",
    status: "Conectado"
  },
  {
    nombre: "Candia",
    avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07N8G6DYQZ-9e6244637e7d-72",
    status: "Desconectado"
  },
  {
    nombre: "Claudia Varela",
    avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07N8G6DYQZ-9e6244637e7d-72",
    status: "Desconectado"
  },
  {
    nombre: "Gabriel Casabona",
    avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07N8G6DYQZ-9e6244637e7d-72",
    status: "Desconectado"
  },
  {
    nombre: "Lio Silman",
    avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07N8G6DYQZ-9e6244637e7d-72",
    status: "Desconectado"
  },
  {
    nombre: "Lugar Legor",
    avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07N8G6DYQZ-9e6244637e7d-72",
    status: "Conectado"
  },
  {
    nombre: "Luciano Leone",
    avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07N8G6DYQZ-9e6244637e7d-72",
    status: "Desconectado"
  },
  {
    nombre: "Tomas Martinez",
    avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07N8G6DYQZ-9e6244637e7d-72",
    status: "Conectado"
  },
  {
    nombre: "Matias Gimenez",
    avatar: "https://ca.slack-edge.com/T07EJ2FLZ2R-U07N8G6DYQZ-9e6244637e7d-72",
    status: "Conectado"
  }
]


const App = () => {
  return (

    <div style={{ backgroundColor: '#5b2b5c', width: '150px', height: '180px', borderRadius: '5%', padding: '20px', color: 'white', fontFamily: 'Helvetica', fontSize: '10px' }}>

      {contactos.map((contacto) => (
        
        <div style={{ display: 'flex', gap: '5px', alignItems: 'center', marginBottom: '5px', position: 'relative' }}>
          
          
          <img src={contacto.avatar} alt="imagen" style={{ height: '15px' }} />
          <div className='circulo'></div>
          
          <span>{contacto.nombre}</span>
         
         
          <div style={{ marginLeft: '10px', position: 'absolute'}}>
          {contacto.status === "Conectado" ? <div className='conectado'></div>
            : <div className='desconectado'></div>
          }
            </div>
        </div>
        

      ))}

    </div>
  );
};



export default App;
