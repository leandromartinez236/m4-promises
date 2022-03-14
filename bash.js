const fs = require("fs");

const p1 = new Promise ((resolve, reject)=>{
  fs.readFile('./demo/student1.json',(err,data)=>{
    if(err){
      console.log(err);
    }else{
      resolve(JSON.parse(data))
    }
  })
})
const p2 = new Promise ((resolve, reject)=>{
  fs.readFile('./demo/student2.json',(err,data)=>{
    if(err){
      console.log(err);
    }else{
      resolve(JSON.parse(data))
    }
  })
})
const p3 = new Promise ((resolve, reject)=>{
  fs.readFile('./demo/student3.json',(err,data)=>{
    if(err){
      console.log(err);
    }else{
      resolve(JSON.parse(data))
    }
  })
})
const p4 = new Promise ((resolve, reject)=>{
  fs.readFile('./demo/student4.json',(err,data)=>{
    if(err){
      console.log(err);
    }else{
      resolve(JSON.parse(data))
    }
  })
})
const p5 = new Promise ((resolve, reject)=>{
  fs.readFile('./demo/student5.json',(err,data)=>{
    if(err){
      console.log(err);
    }else{
      resolve(JSON.parse(data))
    }
  })
})
const create = (datos)=>{
  const promise = new Promise((resolve,reject)=>{
    fs.writeFile('./demo/listStudents.json',datos,(err)=>{
      if(err){
        console.log(err);
      }
    })
  })
}
Promise.all([p1,p2,p3,p4,p5])
.then(data => create(JSON.stringify(data,null,2)))
.catch(err=>console.log(err))



//de otra forma 
// const obj = {};
// obj.students = [];
// for (let i = 1; i <= 5; i++) {
//   fs.readFile(`./demo/student${i}.json`, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       a = JSON.parse(data);
//       obj.students.push(a);
//       json = JSON.stringify(obj, null, 2);
//       fs.writeFile("./demo/liststudents.json", json, (err) => {
//         if (err) {
//           console.log(err);
//         }
//       });
//     }
//   });
// }