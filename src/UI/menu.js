import { desayuno } from '../firebase-controller.js';

export const desayunos = (data) => {
  console.log(data)
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
  //  desayuno(paintDesayuno);

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
  //  paintDesayuno(data);
   return formElement;
 };

 export const paintDesayuno = (dataDesayuno) => {
   let listaDesayunos = '';
   dataDesayuno.forEach((doc) => {
     const formPedido = `
     <div class="container">
     <div id="desayunoo">
     <ul>
     <li id="text-${doc.item}"> 
     ${doc.item} 
     ${doc.precio}
     </li>
     </ul>
     </div>
     </div>
     `;
     listaDesayunos +=formPedido;
   });
 
 
   return listaDesayunos;
 };