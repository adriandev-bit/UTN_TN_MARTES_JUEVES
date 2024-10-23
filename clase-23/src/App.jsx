import React from "react";

function App() { 
  let statusServer = 'cerrado';
  let espacio = 11;
  let espacioMaximo = 10;
  let espacioCercaDelLimite = espacioMaximo * 0.8 
  return (
    <div>

      
      
          {
          espacioCercaDelLimite
          &&
          <div>
              {
                  espacio === espacioMaximo ? <span>Has consumido todo tu espacio</span>
                  : ( espacio > espacioMaximo ? <span>No puedes realizar mas operaciones</span>
                  : <span>Estas cerca de consumir el total del espacio</span>  )
              }
              <a href="#"> Mejorar Plan</a>
          </div>
          }
    

      <h1>Status Server: <span>{statusServer}</span></h1>
      <button>
      {statusServer === 'cerrado'? 'Abrir' : 'Cerrar'}
      </button>

    </div>
  );
}

export default App;
