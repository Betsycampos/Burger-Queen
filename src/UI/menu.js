import { menuPedido } from './menuPedido.js';
// import {agregarPedido} from '../firebase-controller.js'

export const desayunos = (data, objtPedido) => {
  // console.log(data)
   const formElement = document.createElement('section');
   const formPedido = `
   <div>
      <h2>Menú</h2>
       <input type="text" id="cliente">
         <button type="button"id="btn-home">Inicio</button>
           <div class="container">
             <div class="row">
               <div class="column-6">
                  ${paintDesayuno(data)}
               </div>
                <div class="column-6">
                  ${menuPedido}
                </div>
             </div>
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

export const paintDesayuno = (dataDesayuno) => {
  let listaDesayunos = '';
   dataDesayuno.forEach((doc) => {
     const formPedido = `
     <div class="container">
        <div class="row">
          <div class="column-6">
            <div class="d-flex flex-row" id="desayuno">
               <p type="button" id="text-${doc.item}"> ${doc.item}..........S/.${doc.precio}.00
               </p>
                <button class="pedido color-blanco" id="agregar-${doc.item}">AGREGAR</button>
             </div>
          </div>
       </div>
     </div>
     `;
     listaDesayunos +=formPedido;
   });
   return listaDesayunos;
};

export const mostrarPedidos = () => {
  
}

  
/**
* 

     const pedido = document.getElementById('agregar-${doc.item}')
     pedido.innerHTML= paintDesayuno(dataDesayuno);
   
* 
*/