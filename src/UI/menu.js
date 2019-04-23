import { desayuno } from '../firebase-controller.js';

export const desayunos = (dataDesayuno) => {
   const formElement = document.createElement('form');
   const formPedido = `
   <div>
   <h2>Menú</h2>
   <input type="text" id="cliente">
   <button type="button"id="btn-home">Inicio</button>
   <div class="container">
   <div class="row">
   <div class="col-6">
   </div>
   </div>
   </div>
   </div>`;
   formElement.innerHTML = formPedido

   formElement.setAttribute('id', 'frm-home');
   // formElement.innerHTML = formPedido;
   // Se guarda nombre del cliente
   const btnRetorno = formElement.querySelector('#btn-home');
   const nombre = localStorage.getItem('nombre');
   formElement.querySelector('#cliente').value = nombre;
   // Me retorna a inicio
   btnRetorno.addEventListener('click', () => {
   window.location.hash = '#/home';
   });

   return formElement;
 };  