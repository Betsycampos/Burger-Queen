import {desayuno, almuerzo} from '../firebase-controller.js'
export const menuPedido = (data) => {
     const formElement = document.createElement('section');
     const formPedido = `
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
      <td>${data.item}</td>
      <td>${data.precio}</td>
      <td>${data.cantidad}</td>
    </tr>
  </tbody>
</table>
<span>${data.total}</span>
`
formElement.innerHTML = formPedido
   formElement.setAttribute('id', 'section-pedido');  
   return formElement;
};