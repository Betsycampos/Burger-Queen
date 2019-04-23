import { menuAlmuerzo } from '../firebase-controller.js';
export const desayuno = (product) => {
    const formElement = document.createElement('form');
    const formPedido = `
    <div>
    <h2>Menú</h2>
    <input type="text" id="cliente">
    <button type="button"id="btn-home">Inicio</button>
    <div class="container">
    <table class="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">Item</th>
      <th scope="col">precio</th>
      <th scope="col">tipo</th>
    </tr>
  </thead>
  <tbody id="tableProducts"> 
    <tr>
      <th scope="row"></th>
      <td></td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</table>
    <div class="row">
    <div class="col-6">
    </div>
    </div>
    </div>
    </div>`;
    formElement.innerHTML = formPedido
    var tabla = document.getElementById("tableProducts")

    menuAlmuerzo(dataProduct =>
      dataProduct.forEach(element => {
        tableProducts.appendChild(product(element))
      }));
  
   
    formElement.setAttribute('id', 'frm-home');
    formElement.innerHTML = formPedido;
    const btnRetorno = formElement.querySelector('#btn-home');
    const nombre = localStorage.getItem('nombre');
    formElement.querySelector('#cliente').value = nombre;
    btnRetorno.addEventListener('click', () => {
    window.location.hash = '#/home';
    });
    return formElement;
  };