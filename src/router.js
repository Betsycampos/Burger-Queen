import { templateMenu } from './templatesMenu.js'

const changeTmp = (hash) => {
  if (hash === '#/' || hash === '' || hash === '#') {
    return viewTmp('#/home');
  } else if (hash === '#/inicio' || hash === '#/menu' || hash === '#/pedido') {
    return viewTmp(hash);
  } else {
    return viewTmp('#/different');
  }
}

const viewTmp = (routers) => {
  const router = routers.substr(2, routers.length - 2)
  const container = document.getElementById("container")
  container.innerHTML = templateMenu[router];
}

window.addEventListener('load', changeTmp(window.location.hash))
if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)
// import { total } from './templatesMenu.js';

// export const vistaTemplate = (routers) => {
//     const router = routers.substr(2, routers.length - 2);
//     const pedido = document.getElementById('pedido');
//     container.innerHTML = '';
//     switch (router) {
//         case 'total':
//         pedido.appendChild(total());
//         break;
//     };
// };

// export const initRouter = () => {
//     window.addEventListener('load', vistaTemplate(window.location.hash))
//     if (('onhashchange' in window)) window.onhashchange = () => vistaTemplate(window.location.hash)
//   }

