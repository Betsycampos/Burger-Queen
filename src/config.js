export const configFirebase = () => {   // Initialize Firebase
  const config = {
    apiKey: "AIzaSyAHafw898Kfjx6jaMx72vwK_UJhJXzdsuU",
    authDomain: "burger-queen-76a21.firebaseapp.com",
    databaseURL: "https://burger-queen-76a21.firebaseio.com",
    projectId: "burger-queen-76a21",
    storageBucket: "burger-queen-76a21.appspot.com",
    messagingSenderId: "695085114950"
  };
  firebase.initializeApp(config);
};

// const db = firebase.firestore();
// db.settings({timestampsInSnapshots: true});
// console.log(db);

// //   const db = firebase.firestore();
// // db.settings({timestampsInSnapshots: true});

// // db.collection('desayuno').get().then((snapshot) => {
// //   console.log(snapshot.doc); 
// // });
// // 
// // export const db = firebase.firestore();
// // db.settings({timestampsInSnapshots: true});
