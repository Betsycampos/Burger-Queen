import home from '../UI/home.js'
import menu from '../UI/menu.js'
export const templatePedido = (rutas) => {
  const router = rutas.substr(2, rutas.length -2);
  const pedido = document.getElementById('pedido');
  pedido.innerHTML = '';
  switch (router) {
    case 'home':
    pedido.appendChild(home());
    break;
    case 'menu':
    pedido.appendChild(menu());
    break;
  };
};

export const cambio = (hash) => {
  if( hash === '#/home' || hash === '#/menu') return templatePedido(hash);
  else return templatePedido('#/home');
};

export const enrutador = () => {
  window.addEventListener('load', cambio(window.location.hash))
  if (('onhashchange' in window)) window.onhashchange = () => cambio((window.location.hash));
  
} 