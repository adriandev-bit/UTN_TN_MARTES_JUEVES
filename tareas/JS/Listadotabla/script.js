

// const personas = [
//     { nombre: "Adrián Mogus", status: "activo", avatar: "https://i.pravatar.cc/150?img=1" },
//     { nombre: "Candia", status: "inactivo", avatar: "https://i.pravatar.cc/150?img=2" },
//     { nombre: "Claudia Varela", status: "activo", avatar: "https://i.pravatar.cc/150?img=3" },
//     { nombre: "Emanuel Carreira", status: "inactivo", avatar: "https://i.pravatar.cc/150?img=4" },
//     { nombre: "Fede Rabbia", status: "activo", avatar: "https://i.pravatar.cc/150?img=5" },
//     { nombre: "Gabriel Casabona", status: "inactivo", avatar: "https://i.pravatar.cc/150?img=6" },
//     { nombre: "Gastón Ferrari", status: "activo", avatar: "https://i.pravatar.cc/150?img=7" },
//     { nombre: "Lio Silman", status: "activo", avatar: "https://i.pravatar.cc/150?img=8" },
//     { nombre: "Lucas Legor", status: "inactivo", avatar: "https://i.pravatar.cc/150?img=9" },
//     { nombre: "Luciano Leone", status: "activo", avatar: "https://i.pravatar.cc/150?img=10" },
//     { nombre: "Tomás Martínez", status: "inactivo", avatar: "https://i.pravatar.cc/150?img=11" },
//     { nombre: "Matías Giménez", status: "activo", avatar: "https://i.pravatar.cc/150?img=12" }
// ];

// const listaPersonasDiv = document.getElementById('lista-personas');
// let resultado = ''

// for(const persona of personas ){
//     let statusActivo = persona.status === "activo";

//     resultado = resultado + `
//     <div class="persona">
//         <img  src="${persona.avatar}" alt="imagen" class="avatar">
//         <h2>${persona.nombre}</h2>
//         ${
//             statusActivo ? ` <span class="estado conectado"></span> ` :  `<span class="estado desconectado"></span>`
//         }
//     </div>
//     `;
// }

// listaPersonasDiv.innerHTML = resultado  // Mostrar el HTML en la pagina


/**************************************************************************************************************************************** */

/*
Desarrollar la siguiente tabla de datos.

Parte 1:
Utilizar el nombre_columnas para renderizar las columnas de arriba de la tabla. Deberian escribirse en HTML de la siguiente manera:
<div id='nombre_columnas'>
    <button>{table_name} <i>icono de arrow down</i></button>
    <button>{table_name} <i>icono de arrow down</i></button>
    <button>{table_name} <i>icono de arrow down</i></button>
    <button>{table_name} <i>icono de arrow down</i></button>
    <button>{table_name} <i>icono de arrow down</i></button>
</div>
Luego aplicar los estilos para que esten en la misma fila. (usar de referencia el figma)

Parte 2:
Utilizar registros para renderizar los datos de la tabla. Deberian escribirse en HTML de la siguiente manera:
<div id='registros'>
    <div class='registro-fila'>
        <div>
            <input type="checkbox" checked (puede no estar este valor, depende de si tiene o no selected)>
        </div>
        <div>
            {registro.Title}
        </div>
        <div>
            {registro.Name}
        </div>
        <div>
            {registro.Description}
        </div>
        <div>
            {registro.Date}
        </div>
        <div>
            {registro.Origin}
        </div>
        <div>
            {registro.Status}
        </div>
        <div>
            {registro['Process ID']}
        </div>
    </div>
</div>

Link de figma de referencia:[text](https://www.figma.com/design/bWhe7ecD77qANPk03gAK60/Tables-(Community)?node-id=1-2&node-type=canvas&t=YLnxfeuWOdQGfDvv-0)

*/

const nombres_columnas = [
    'selected',
    'Title',
    'Name',
    'Description',
    'Date',
    'Origin',
    'Status',
    'Process ID',
]

const registros = [
    {
        'Title': 'Primer ejemplo',
        'Name': 'Primer ejemplo',
        'Description': 'Primer ejemplo',
        'Date': 'Primer ejemplo',
        'Origin': 'Primer ejemplo',
        'Status': 'inactive',
        'Process ID': 'Primer ejemplo',
        'selected': false,
    },
    {
        'Title': 'Segundo ejemplo',
        'Name': 'Segundo ejemplo',
        'Description': 'Segundo ejemplo',
        'Date': 'Segundo ejemplo',
        'Origin': 'Segundo ejemplo',
        'Status': 'active',
        'Process ID': 'Segundo ejemplo',
        'selected': false,
    },
    {
        'Title': 'Tercer ejemplo',
        'Name': 'Tercer ejemplo',
        'Description': 'Tercer ejemplo',
        'Date': 'Tercer ejemplo',
        'Origin': 'Tercer ejemplo',
        'Status': 'active',
        'Process ID': 'Tercer ejemplo',
        'selected': true,
    },
]


//LECTURA DEL ENCABEZADO DE LA TABLA
lista_columnas = `<table id='registros'>
                    <thead >
                    <tr id='nombre_columnas'>
                
                    `
for (let columna of nombres_columnas){
    
    lista_columnas = lista_columnas + `
             <th>
             <span>${columna === 'selected' ? 
                `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m424-312 282-282-56-56-226 226-114-114-56 56 170 170ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z"/></svg>`
                : columna}
             </span>  
             <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-800v487L216-537l-56 57 320 320 320-320-56-57-224 224v-487h-80Z"/></svg>   
            </th> 
             `    
}
lista_columnas = lista_columnas + `</tr></thead>`;


//LECTURA DEL CONTENIDO DE LA TABLA
resultado = `<tbody class='registro-fila' id='nombre_contenido'>`
for(const registro of registros){

    resultado = resultado + `
       
            <tr class='registro-fila'>
                <td>
                    <input type = "checkbox">
                </td>
                <td>
                    ${registro.Title}
                </td>
                <td>
                    ${registro.Name}
                </td>
                <td>
                    ${registro.Description}
                </td>
                <td>
                    ${registro.Date}
                </td>
                <td>
                    ${registro.Origin}
                </td>
                <td>
                    ${registro.Status}
                </td>
                <td>
                    ${registro['Process ID']}
                </td>
            </tr>
   
        `

}
resultado = resultado +`</tbody></table>`

const registrosDIV = document.getElementById('registros');
registrosDIV.innerHTML = lista_columnas + resultado;

