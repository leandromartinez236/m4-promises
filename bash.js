// const fs = require("fs");
//Forma1
const {
  promises: { readFile, writeFile },
} = require("fs");

Promise.all([
  readFile("./demo/student1.json"),
  readFile("./demo/student2.json"),
  readFile("./demo/student3.json"),
  readFile("./demo/student4.json"),
  readFile("./demo/student5.json"),
]).then(([student1, student2, student3, student4, student5]) => {
  let res = "\n";
  [student1, student2, student3, student4, student5].forEach((file) => {
    res = res + file.toString() + "\n";
  });

  writeFile("listado.txt", res)
    .then((data) => {
      console.log("Archivo creado");
      console.log(
        readFile("listado.txt").then((data) => console.log(data.toString))
      );
    })
    .catch((err) => {
      console.log(err);
      process.exit(1);
    });
});
//Forma1 fin

//Forma2

// const p1 = new Promise((resolve, reject) => {
//   fs.readFile("./demo/student1.json", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       resolve(JSON.parse(data));
//     }
//   });
// });
// const p2 = new Promise((resolve, reject) => {
//   fs.readFile("./demo/student2.json", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       resolve(JSON.parse(data));
//     }
//   });
// });
// const p3 = new Promise((resolve, reject) => {
//   fs.readFile("./demo/student3.json", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       resolve(JSON.parse(data));
//     }
//   });
// });
// const p4 = new Promise((resolve, reject) => {
//   fs.readFile("./demo/student4.json", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       resolve(JSON.parse(data));
//     }
//   });
// });
// const p5 = new Promise((resolve, reject) => {
//   fs.readFile("./demo/student5.json", (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       resolve(JSON.parse(data));
//     }
//   });
// });
// const create = (datos) => {
//   fs.writeFile("./demo/listStudents.json", datos, (err) => {
//     if (err) {
//       console.log(err);
//     }
//   });
// };
// Promise.all([p1, p2, p3, p4, p5])
// .then((data) => create(JSON.stringify(data, null, 2)))
// .catch((err) => console.log(err));
//Forma2 fin
