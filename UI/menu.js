export default () => {
    const formElement = document.createElement('form');
    const formPedido = `
    <div>
    <h2>Inicio</h2>
    <input id="name" type="text" placeholder="nombre del cliente"> 
    <button id="btn-home">PED</button>
    </div>`;
    formElement.setAttribute('id', 'frm-home');
    formElement.innerHTML = formPedido;
    const btnRetorno = formElement.querySelector('#btn-home');
    btnRetorno.addEventListener('click', () => {
      window.location.hash = '#/home';
    });
    return formElement;
  };

// export const pedidos = () => {
//     const formElement =

// }