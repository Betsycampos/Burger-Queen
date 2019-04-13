export default () => {
  const formElement = document.createElement('form');
  const formPedido = `
  <div>
  <input class="input-inicio" id="name" type="text" placeholder="nombre del cliente"> 
  <button type="button" id="btn-menu">PEDIDO</button>
  </div>`;
  formElement.setAttribute('id', 'frm-home');
  formElement.innerHTML = formPedido;
  // document.getElementById('home').innerHTML = '';  
  const btnPedido = formElement.querySelector('#btn-menu');
  btnPedido.addEventListener('click', () => {
    window.location.hash = '#/menu';
  });
  return formElement;
};