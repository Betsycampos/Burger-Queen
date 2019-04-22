import {configFirebase} from './config.js';
import {enrutador} from './router.js';

window.addEventListener('load', () => {
  configFirebase();
  enrutador();
});
