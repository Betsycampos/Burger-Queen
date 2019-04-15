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
  const input= formElement.querySelector('#name');
  btnPedido.addEventListener('click', () => {
    
    window.location.hash = '#/menu';
  });
  return formElement;
};

// const probandoLocalS = () => {
//   let menu = {
//     item ="hamburguesa doble - pollo",
//     name = "",
//     precio =15,
//     tipo = "hamburguesa"
//   };
// };

// const name = "";

// localStorage.setItem('nombre', name);

// return name;