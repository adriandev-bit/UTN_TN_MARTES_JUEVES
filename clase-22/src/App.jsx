import React from 'react'
import './App.css'





// function App() {
//   return (
//     <div className='titulo'>
//       <h1>Hola mundo!</h1>
//     </div>
//   )
// }



const nombresColumnas = [
    'selected',
    'Title',
    'Name',
    'Description',
    'Date',
    'Origin',
    'Status',
    'Process ID',
];

const registros = [
    {
        Title: 'Primer ejemplo',
        Name: 'Primer ejemplo',
        Description: 'Primer ejemplo',
        Date: 'Primer ejemplo',
        Origin: 'Primer ejemplo',
        Status: 'inactive',
        'Process ID': 'Primer ejemplo',
        selected: false,
    },
    {
        Title: 'Segundo ejemplo',
        Name: 'Segundo ejemplo',
        Description: 'Segundo ejemplo',
        Date: 'Segundo ejemplo',
        Origin: 'Segundo ejemplo',
        Status: 'active',
        'Process ID': 'Segundo ejemplo',
        selected: false,
    },
    {
        Title: 'Tercer ejemplo',
        Name: 'Tercer ejemplo',
        Description: 'Tercer ejemplo',
        Date: 'Tercer ejemplo',
        Origin: 'Tercer ejemplo',
        Status: 'active',
        'Process ID': 'Tercer ejemplo',
        selected: true,
    },
];

const RegistrosTable = () => {
    return (

        <div>
          <div className='cabecera'>
            <div>
            <h2>Headline <span>Level text or value</span></h2>
            <h4>A descriptive body text come here</h4>
            </div>
            <div className="selector">
                <span>Delete</span>
                <span>Filters</span>
                <button>Export</button>
                <button>+ Add new</button>
            </div>
            </div>

        <table id='registros'>
            <thead>
                <tr id='nombre_columnas'>
                    {nombresColumnas.map((columna) => (
                        <th key={columna}>
                            <span>
                                {columna === 'selected' ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                                        <path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
                                    </svg>
                                ) : (
                                    columna
                                )}
                            </span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                                <path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z" />
                            </svg>
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className='registro-fila' id='nombre_contenido'>
                {registros.map((registro, index) => (
                    <tr className='registro-fila' key={index}>
                        <td>
                            <input type="checkbox" />
                        </td>
                        <td>{registro.Title}</td>
                        <td>{registro.Name}</td>
                        <td>{registro.Description}</td>
                        <td>{registro.Date}</td>
                        <td>{registro.Origin}</td>
                        <td>{registro.Status}</td>
                        <td>{registro['Process ID']}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
};



export default RegistrosTable