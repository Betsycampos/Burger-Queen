// import {desayuno, almuerzo} from '../firebase-controller.js';

export const menuPedido = (objtPedido) => {
  const formPedido = document.createElement('tr');
  formPedido.innerHTML=`
   <table class="table">
     <thead>
       <tr>
         <th scope="col">Producto</th>
         <th scope="col">Precio</th>
         <th scope="col">Cantitad</th>
         <th scope="col">Total</th>
       </tr>
     </thead>
       <tbody>
         <tr>
           <td>${objtPedido.item}</td>
           <td>${objtPedido.precio}</td>
           <td>${objtPedido.cantidad}</td>
         </tr>
       </tbody>
   </table>
     <span>${objtPedido.total}</span>
  `;

formPedido +=formPedido;
  // return formPedido;
  console.log(formPedido);
};




// export const menuPedido = (objtData) => {
//      const formElement = document.createElement('section');
//      formElement.innerHTML = `
//           <table class="table">
//           <thead>
//             <tr>
//               <th scope="col">Producto</th>
//               <th scope="col">Precio</th>
//               <th scope="col">Cantitad</th>
//               <th scope="col">Total</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>${objtData.item}</td>
//               <td>${objtData.precio}</td>
//               <td>${objtData.cantidad}</td>
//             </tr>
//           </tbody>
//         </table>
//         <span>${objtData.total}</span>
//         `  
//          return formElement;
// };