import React from 'react';

function App() {
  return (
    <div>
      <Tarjeta 
        saldo= "$25000"
        logo_tarjeta="https://www.pixartprinting.es/blog/wp-content/uploads/2019/07/mastercard.png" 
        numero_tarjeta="1234 5678 1234 5678"
        nombre="Pepito"
        backgroundColor= "#134682"
      />
      <br/>
            <Tarjeta 
        saldo= "$18.000"
        logo_tarjeta="https://www.pixartprinting.es/blog/wp-content/uploads/2019/07/mastercard.png" 
        numero_tarjeta="1234 5678 1234 5678"
        nombre="Juanita"
        backgroundColor= "#d2b969"
      />
      <br/>
            <Tarjeta 
        saldo= "$155.000"
        logo_tarjeta="https://logos-marcas.com/wp-content/uploads/2020/04/Visa-Logotipo-2014%E2%80%93presente-650x366.png" 
        numero_tarjeta="1234 5678 1234 5678"
        nombre="Fulanito"
        backgroundColor= "#2c2c2b"
      />
    </div>
  );
}

const Tarjeta = (props) => {
  console.log(props);
  return (
    <header style={{ backgroundColor: props.backgroundColor, width: '300px',height: '150px', borderRadius: '5%', padding:'20px', color:'white', fontFamily: 'Helvetica', fontSize: '10px' }}>
      
      <div style= {{display: 'flex', justifyContent:'space-between', paddingBottom: '50px'}}>
      
      <h2>{props.saldo}</h2>
      <img src={props.logo_tarjeta} alt="Logo de tarjeta" style={{ width: '80px', height: 'auto', marginRight: '10px' }} />
      </div>

      <div>
      <h2>{props.numero_tarjeta}</h2>
      <h2>{props.nombre}</h2>
      </div>
      
    </header>
  );
}

export default App;
