
const txtocultohtml = document.getElementById('txt-oculto');
const btnshowtxthtml = document.getElementById('btn-show-txt');

function toggleCartel(){
    // let estaOculto = txtOcultoHTML.classList.contains('hidden')
    // btnshowtxthtml = oculto ? `Ver mas : ` 
    txtocultohtml.classList.toggle('hidden')
}

btnshowtxthtml.addEventListener('click',toggleCartel)