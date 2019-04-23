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

