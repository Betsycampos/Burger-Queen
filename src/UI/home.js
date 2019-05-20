export default () => {
  const formElement = document.createElement('form');

  const formInicio =`
  <div class="container-nombre">
    <div class="container-input">
    <input class="input-inicio" id="name" type="text" placeholder="nombre del cliente">
    <button type="button" id="btn-menu">PEDIDO</button>
    </div>
  </div>
  `;
  formElement.setAttribute('id', 'frm-home');
  formElement.innerHTML = formInicio;
  const btnPedido = formElement.querySelector('#btn-menu');
  btnPedido.addEventListener('click', () => {
  const input= formElement.querySelector('#name').value;
  localStorage.setItem('nombre', input);
  // document.getElementById('name').value;
  window.location.hash = '#/desayunos';
  });
  return formElement;
};