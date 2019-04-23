export const menuAlmuerzo = (callback) =>
  firebase.firestore().collection("almuerzo-cena")
  .onSnapshot((querySnapshot) => {
    const arrAlmuerzo = [];
    querySnapshot.forEach((doc) => {
      arrAlmuerzo.push({
        id: doc.data().id,
        item: doc.data().item,
        precio: doc.data().precio,
        tipo: doc.data().tipo
    });
  });
    callback(arrAlmuerzo);

  });

//leer documentos
// export const leeAlmuerzo = (menuAlmuerzo) =>
//   firebase.firestore().collection("almuerzo-cena")
//   .onSnapshot((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//       console.log(`${doc.id} => ${doc.data()}`);
//     });

//   });
  
  


// const db = firebase.firestore();
// db.settings({
//   timestampsInSnapshots: true
// }
// );

// db.collection("almuerzo-cena").get().then(function(querySnapshot) {
//   querySnapshot.forEach(function(doc) {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//   });
// });
