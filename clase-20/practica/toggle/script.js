
const txtocultohtml = document.getElementById('txt-oculto'); //llamando al texto oculto
const btnshowtxthtml = document.getElementById('btn-show-txt'); //llamando a boton

function toggleCartel(){
    // let estaOculto = txtOcultoHTML.classList.contains('hidden')
    // btnshowtxthtml = oculto ? `Ver mas : ` 
    txtocultohtml.classList.toggle('hidden')
    if (txtocultohtml.classList.contains('hidden')){
        btnshowtxthtml.innerText ='ver mas'
    }
    else{
        btnshowtxthtml.innerText ='ver menos'
    }
}

btnshowtxthtml.addEventListener('click',toggleCartel)