// D - TASK
function checkContent(a, b) {
    return a.split("").sort().join("") === b.split("").sort().join("")
}

console.log(checkContent('maktab', 'takbam'));
console.log(checkContent("mitgroup", "gmtiprou"));
console.log(checkContent("mitroup", "gmtiprou"));


// // C - TASK
// class Shop {
//     non;
//     lagmon;
//     kola;

//     constructor(non, lagmon, kola) {
//         this.non = non;
//         this.lagmon = lagmon;
//         this.kola = kola;
//     }

    
//     _time() {
//         return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     }

//     qoldiq() {
//         const vaqt = this._time();
//         console.log(`Hozir ${vaqt}da ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.kola}ta kola mavjud!`);
//     }

//     sotish(nomi, soni) {
//         this[nomi] -= soni;
//     }

//     qabul(nomi, soni) {
//         this[nomi] += soni;
//     }
// }

// // call
// const shop = new Shop(4, 5, 2);

// shop.qoldiq();


// shop.sotish("non", 3);
// shop.qabul("kola", 4);
// shop.qoldiq();









// // B _ TASK
// function countDigits(str) {
//      const matches = str.match(/\d/g);
//      return matches ? matches.length : 0;
//    }

//    const myString = "dmw284gsbd69idm3def2";
//    const result = countDigits(myString);
//    console.log("raqamlar soni:", result); 




