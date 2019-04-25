import home from './UI/home.js'
import {desayunos, paintDesayuno} from './UI/menu.js'
import {almuerzos} from './UI/restoDia.js'
import{desayuno} from './firebase-controller.js'

export const templatePedido = (rutas) => {
 const router = rutas.substr(2, rutas.length -2);
 const pedido = document.getElementById('pedido');
 pedido.innerHTML = '';
 switch (router) {
   case 'home':
   pedido.appendChild(home());
   break;

   case 'desayunos':
   desayuno((data) => {
     pedido.appendChild(desayunos(data));
   })
   break;

   case 'almuerzos':
   almuerzo((data) => {
     pedido.appendChild(almuerzos(data));
   })
   break;
  
 };
};

export const cambio = (hash) => {
 if( hash === '#/home' || hash === '#/desayunos' ) return templatePedido(hash);
 else return templatePedido('#/home');
};

export const enrutador = () => {
 window.addEventListener('load', cambio(window.location.hash))
 if (('onhashchange' in window)) window.onhashchange = () => cambio((window.location.hash));

};