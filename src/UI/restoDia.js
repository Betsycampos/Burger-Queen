import {menuPedido} from './menuPedido.js'

export const almuerzos = (data) => {
     const formElement = document.createElement('form');
     const formPedido = `
     <div>
     <h2>Menú</h2>
     <input type="text" id="cliente">
     <button type="button"id="btn-home">Inicio</button>
     <div class="container">
     ${paintAlmuerzo(data)}
     </div>
     </div>`;
     formElement.innerHTML = formPedido
     formElement.setAttribute('id', 'frm-home');
     // Se guarda nombre del cliente
     const btnRetorno = formElement.querySelector('#btn-home');
     const nombre = localStorage.getItem('nombre');
     formElement.querySelector('#cliente').value = nombre;
     
     // Retorna a inicio
     btnRetorno.addEventListener('click', () => {
     window.location.hash = '#/home';
     });
     return formElement;
    };
  
   export const paintAlmuerzo = (dataAlmuerzo) => {
     let listaAlmuerzos = '';
     dataAlmuerzo.forEach((doc) => {
       const formPedido = `
       <div class="container">
       <div id="desayunoo">
       <ul>
       <button type="button" id="text-${doc.item}"> ${doc.item}
       </button>
       <button type="button" id="text-${doc.item}"> ${doc.precio}
       </button>
       </ul>
       </div>
       </div>
       `;
       listaAlmuerzos +=formPedido;
     });
       
     return listaAlmuerzos;
    };