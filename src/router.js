import { total } from './templatesMenu.js';

export const vistaTemplate = (routers) => {
    const router = routers.substr(2, routers.length - 2);
    const pedido = document.getElementById('pedido');
    container.innerHTML = '';
    switch (router) {
        case 'total':
        pedido.appendChild(total());
        break;
    };
};

// export const initRouter = () => {
//     window.addEventListener('load', vistaTemplate(window.location.hash))
//     if (('onhashchange' in window)) window.onhashchange = () => vistaTemplate(window.location.hash)
//   }

