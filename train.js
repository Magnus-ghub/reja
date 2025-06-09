
// ASYNC FUNCTION

// console.log("Jack Ma maslahatlari");

// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "togri boshliq tanlang va koproq xato qiling", //20-30
//     "ozingizga ishlashni boshlang", //30-40
//     "siz kuchli bolgan ishlarni qiling", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi dam oling, foydasi yoq", //60
// ];

// async function maslahatBering(a) {
// if (typeof a !== "number") throw new Error("insert a number");   
// else if (a <= 20) return list[0];
// else if (a > 20 && a <= 30) return list[1];
// else if (a > 30 && a <= 40) return list[2];
// else if (a > 40 && a <= 50) return list[3];
// else if (a > 50 && a <= 60) return list[4];
// else {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(list[5]);
//         }, 5000);
//     });
//     // return list[5]; 
//   }
// }
// then/catch

// console.log('passed here 0');
// maslahatBering(34)
//     .then((data) => {
//         console.log("javob:", data);
//     })
//     .catch((err) => {
//         console.log("ERROR:", err);
//     });
// console.log('passed here 1');

// async/await
// async function run() {
//    let javob = await maslahatBering(21);
//    console.log(javob);
//    javob = await maslahatBering(77);
//    console.log(javob);
//    javob = await maslahatBering(53);
//    console.log(javob);
// }
// run();



// // CALLBACK FUNCTION

// console.log("Jack Ma maslahatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "togri boshliq tanlang va koproq xato qiling", //20-30
//     "ozingizga ishlashni boshlang", //30-40
//     "siz kuchli bolgan ishlarni qiling", //40-50
//     "yoshlarga investitsiya qiling", //50-60
//     "endi dam oling, foydasi yoq", //60
// ];

// function maslahatBering(a, callback) {
// if (typeof a !== "number") callback("insert a number", null);   
// else if (a <= 20) callback(null, list[0]);
// else if (a > 20 && a <= 30) callback(null, list[1]);
// else if (a > 30 && a <= 40) callback(null, list[2]);
// else if (a > 40 && a <= 50) callback(null, list[3]);
// else if (a > 50 && a <= 60) callback(null, list[4]); 
// else {
//     setTimeout(function () {
//         callback(null, list[5]);
//     }, 5000);
    
//   }
// }

// console.log('passed here 0');
// maslahatBering(65, (err, data) => { 
//     if (err) console.log("ERROR:", err);
//     console.log("javob:", data);
// });
// console.log('passed here 1');


