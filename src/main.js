import {enrutador} from './router.js';

const inicializando =() => {
 // Initialize Firebase
const config = {
 apiKey: "AIzaSyAHafw898Kfjx6jaMx72vwK_UJhJXzdsuU",
 authDomain: "burger-queen-76a21.firebaseapp.com",
 databaseURL: "https://burger-queen-76a21.firebaseio.com",
 projectId: "burger-queen-76a21",
 storageBucket: "burger-queen-76a21.appspot.com",
 messagingSenderId: "695085114950"
};
firebase.initializeApp(config);
enrutador();
}

window.addEventListener('load', () => {
 inicializando();
});
