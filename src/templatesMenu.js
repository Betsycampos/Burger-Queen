export const total = () => {
  const menuListo = ` <div>
  <h1>BUGER QUEEN</h1>
  <div>
  <div> 
  <input id="cliente" type="text" placeholder="ingrese el nombre del cliente">
  <p id="warning-em" class="warning"></p>
  </div>
  <button id="btn-pedido" type="button" class="btn-pedido">ENVIAR PEDIDO</button>
  </div>
  </div>`;
 const divElement = document.createElement('div');
 divElement.innerHTML = menuListo;
  
 return divElement;
};

// export const mostrarPedido = () => {
//   const pedido = document.getElementById('pedido');
//   pedido.appendChild(total());
// };
