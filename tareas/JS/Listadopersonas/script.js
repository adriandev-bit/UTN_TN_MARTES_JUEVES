

const personas = [
    { nombre: "Adrián Mogus", status: "activo", avatar: "https://i.pravatar.cc/150?img=1" },
    { nombre: "Candia", status: "inactivo", avatar: "https://i.pravatar.cc/150?img=2" },
    { nombre: "Claudia Varela", status: "activo", avatar: "https://i.pravatar.cc/150?img=3" },
    { nombre: "Emanuel Carreira", status: "inactivo", avatar: "https://i.pravatar.cc/150?img=4" },
    { nombre: "Fede Rabbia", status: "activo", avatar: "https://i.pravatar.cc/150?img=5" },
    { nombre: "Gabriel Casabona", status: "inactivo", avatar: "https://i.pravatar.cc/150?img=6" },
    { nombre: "Gastón Ferrari", status: "activo", avatar: "https://i.pravatar.cc/150?img=7" },
    { nombre: "Lio Silman", status: "activo", avatar: "https://i.pravatar.cc/150?img=8" },
    { nombre: "Lucas Legor", status: "inactivo", avatar: "https://i.pravatar.cc/150?img=9" },
    { nombre: "Luciano Leone", status: "activo", avatar: "https://i.pravatar.cc/150?img=10" },
    { nombre: "Tomás Martínez", status: "inactivo", avatar: "https://i.pravatar.cc/150?img=11" },
    { nombre: "Matías Giménez", status: "activo", avatar: "https://i.pravatar.cc/150?img=12" }
];

const listaPersonasDiv = document.getElementById('lista-personas');
let resultado = ''

for(const persona of personas ){
    let statusActivo = persona.status === "activo";

    resultado = resultado + `
    <div class="persona">
        <img  src="${persona.avatar}" alt="imagen" class="avatar" width="50" height="50" >
        <h2>${persona.nombre}</h2>
        ${
            statusActivo ? ` <span class="estado conectado"></span> ` :  `<span class="estado desconectado"></span>`
        }
    </div>
    `;
}

listaPersonasDiv.innerHTML = resultado  // Mostrar el HTML en la pagina