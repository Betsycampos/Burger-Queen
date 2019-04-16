export default () => {
    const formElement = document.createElement('form');
    const formPedido = `
    <div>
    <h2>Menú</h2>
    <input type="text" id="cliente">
    <input type="number" id="codigo" placeholder="Cantidad">
    <button type="button"id="btn-home">Inicio</button>
    </div>`;
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

// export const pedidos = () => {
//     const formElement =

// }