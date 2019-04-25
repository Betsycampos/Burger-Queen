import { desayuno } from '../firebase-controller.js';

export const desayunos = (data) => {
  // console.log(data)
   const formElement = document.createElement('form');
   const formPedido = `
   <div>
   <h2>Menú</h2>
   <input type="text" id="cliente">
   <button type="button"id="btn-home">Inicio</button>
   <div class="container">
   ${paintDesayuno(data)}
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
     <div id="desayunoo">
     <ul>
     <button id="text-${doc.item}"> ${doc.item}
     </button>
     <button id="text-${doc.item}"> ${doc.precio}
     </button>
     </ul>
     </div>
     </div>
     `;
     listaDesayunos +=formPedido;
   });
 
 
   return listaDesayunos;
 };
 /**
  * 
  * 
  */