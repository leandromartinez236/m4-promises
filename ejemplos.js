const Promise = require("bluebird");

const primerMetodo = ()=> {
  const promise = new Promise((resolve, reject) =>{
    setTimeout(()=> {
      console.log("Terminó el primer método");
      resolve("a"); //pasamos unos datos para ver como los manejamos
    }, 2000); // para simular algo asincronico hacemos un setTimeOut de 2 s
  });
  return promise;
};

const segundoMetodo = (datos) =>{
  const promise = new Promise((resolve, reject)=> {
    setTimeout(()=> {
      console.log("Terminó el segundo método");
      resolve("segundo");
    }, 2000);
  });
  return promise;
};

const tercerMetodo = (datos)=> {
  const promise = new Promise((resolve, reject)=> {
    setTimeout(()=>{
      console.log("Terminó el tercer método");
      // console.log(datos.nuevosDatos); //imprimos los datos concatenados
      resolve("tercero");
    }, 3000);
  });
  return promise;
};

// primerMetodo()
//    .then(segundoMetodo)
//    .then(tercerMetodo)
//    .then(datos)=>{
//         console.log(datos); //debería ser el 'hola' que pasamos en tercerMetodo
//    }).catch(err)=>{
//       console.log('error '+ err);
//    });
// console.log('asas')
let p1 = primerMetodo();
const p2 = segundoMetodo();
const p3 = tercerMetodo();
const p = Promise.all([p1, p2, p3])
  .then((resultado) =>{
    console.log(resultado); //un arreglo con los valores pasamos a resolve en cada metodo
  })
  .catch((err) =>{
    console.warn(err); //mostramos el error por consola. Veremos que es el que falló primero, o sea el del primer metodo
  });

setInterval(()=> {
  console.log(PromiseInspection(p));
}, 500);
