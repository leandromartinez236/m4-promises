const promise = new Promise((resolve, reject)=> {
  // Hacer cosas acá dentro, probablemente asincrónicas.
  
  if ('true') {
    //Todo funcionó como esperabamos
    resolve("Jooya!");
  }
  else {
    reject(Error("Algo se rompió"));
  }
});

// promise
//   .then((data) =>{
//     // Ejecuto código sabiendo que todo salió bien
//     // Siguiendo el ejemplo de arriba, data tendría adentro el string: 'Jooya!'
//     console.log(data);
//   })
//   .catch((error) =>{
//     // La promesa fue rechazada, aca ejecutamos código para ese caso
//     // Siguiendo el ejemplo de arriba, error tendría adentro el string: 'Algo se rompió'
//     console.log(error);
//   });

const primerMetodo = () =>{
  const promise = new Promise((resolve, reject)=> {
    setTimeout(() =>{
      console.log('Terminó el primer método');
      resolve({ num: '123' }); //pasamos unos datos para ver como los manejamos
    }, 2000); // para simular algo asincronico hacemos un setTimeOut de 2 s
  });
  return promise; //devuelve Promise { num: '123'}
};

const segundoMetodo = (datos)=> {
  const promise = new Promise((resolve, reject)=> {
    setTimeout(() =>{
      console.log('Terminó el segundo método');
      resolve({ nuevosDatos: datos.num + ' concatenamos texto y lo pasamos' });
    }, 2000);
  });
  return promise; //devuelve Promise { nuevosDatos: '123 concatenamos texto y lo pasamos' }
};

const tercerMetodo = (datos) =>{
  const promise = new Promise((resolve, reject)=> {
    setTimeout(()=> {
      console.log('Terminó el tercer método');
      console.log(datos.nuevosDatos); // '123 concatenamos texto y lo pasamos'
      resolve('hola');
    }, 3000);
  });
  return promise; //Promise { 'hola' }
};

primerMetodo()
  //{ num: '123'}
  .then(segundoMetodo)
  //{ nuevosDatos: '123 concatenamos texto y lo pasamos' }
  .then(tercerMetodo)
  //'hola'
  .then((datos)=> {
    console.log(datos); //debería ser el 'hola' que pasamos en tercerMetodo
  });