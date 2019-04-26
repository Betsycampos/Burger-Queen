export const desayuno = (callback) =>
 firebase.firestore().collection("desayuno")
 .onSnapshot((querySnapshot) => {
   const arrDesayuno = [];
   querySnapshot.forEach((doc) => {
     arrDesayuno.push({id: doc.id, ...doc.data()});
   });
   callback(arrDesayuno);
   });

 export const almuerzo = (callback) =>
 firebase.firestore().collection("almuerzo-cena")
 .onSnapshot((querySnapshot) => {
   const arrAlmuerzo = [];
   querySnapshot.forEach((doc) => {
     arrAlmuerzo.push({id: doc.id, ...doc.data()});
   });
   callback(arrAlmuerzo);
   // console.log(`${doc.id} => ${doc.data().item}.`);
 });


// export const menuAlmuerzo = (callback) =>
//   firebase.firestore().collection("almuerzo-cena")
//   .onSnapshot((querySnapshot) => {
//     const arrAlmuerzo = [];
//     querySnapshot.forEach((doc) => {
//       arrAlmuerzo.push({
//         id: doc.data().id,
//         item: doc.data().item,
//         precio: doc.data().precio,
//         tipo: doc.data().tipo
//     });
//   });
//     callback(arrAlmuerzo);

//   });

