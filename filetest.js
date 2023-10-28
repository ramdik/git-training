/* function testFunc(p, l) {
    let luasPersegi = p * l
    let msg = `luas persegi ini adalah: ${luasPersegi} m2`
    return msg
}

console.log(testFunc(2, 3))

// sesi comparison dan gerbang logika 16/10/23
// Comparison
const comparison1 = "2" == 2 //true
const comparison2 = 2 != 2 //false
const comparison3 = "3" === 3 //false
const comparison4 = 2 !== 2 //false

const comparison5 = 3 > 2 //true
const comparison6 = 2 >= 2 //true
const comparison7 = 2 != 2 //false
const comparison8 = 4 <= 2 //false

//gerbang logika
const logicalAnd = comparison1 && comparison5 //true
const logicalOr = comparison4 || comparison1 // true
const logicalNot = !comparison6 //false
const logicalAndOr = comparison7 && comparison2 || comparison1 //true
const logicalAndOrNot = comparison3 && comparison1 || !comparison8 //true

//testing
console.log(logicalAndOrNot)


//conditional and negasi
if (logicalAnd) {
    console.log(`ini bernilai ${logicalAnd}`)
}

//negasi
if (!logicalNot) {
    console.log(`bernilai ${logicalNot}`) // block bernilai true
}

const inputPass = process.argv[2]

// looping
const isOdd = function (value) {
    if (value % 2 == 0) {
        for (let i = 0; i < jumlahLantai; i++) {
            const element = arr[i];
            console.log(`Mengambil kain pel dilantai:${i}`)
            console.log(`Mencuci kain pel dilantai:${i}`)
            console.log(`Memeras kain pel dilantai:${i}`)
            console.log(`Mengepel di seluruh bagian lantai dilantai:${i}`)
            console.log(`Mengulang tahap 2 sampai 4 di setiap lantai sampai ke lantai dilantai:${i}`)
        }
        return 
    }
}

// looping oddNumb
let jumlahLantai = 10
/* for (let i = 1; i <= jumlahLantai; i++) {
    if (i % 2 !== 0) {
        console.log(`Mengambil kain pel dilantai:${i}`)
        console.log(`Mencuci kain pel dilantai:${i}`)
        console.log(`Memeras kain pel dilantai:${i}`)
        //console.log(`Mengepel di seluruh bagian lantai dilantai:${i}`)
        //console.log(`Mengulang tahap 2 sampai 4 di setiap lantai sampai ke lantai dilantai:${i}`)
    }
} */

const { response } = require("express");

let jumlahLantai = 10
let patokan = 1;
let loopCtrl = true;

// looping dengan while
/* while (loopCtrl) {
    //check evenNumber
    if (patokan % 2 == 0) {
        console.log(`Mengambil kain pel dilantai: ${patokan}`)
        console.log(`Mencuci kain pel dilantai: ${patokan}`)
        console.log(`Memeras kain pel dilantai: ${patokan}`)
        console.log()
    } else if (patokan > jumlahLantai) { // Check apakah sudah memperoses semua lantai
        loopCtrl = false // Set loopCtrl ke false untuk stop looping
    }
    patokan++
} */

// iterasi menggunakan do while -> do dijalankan pertamakali tanpa true/false
/* do {
    // Check jika patokan lebih besar dari jumlahLantai
    if (patokan > jumlahLantai) {
        break // Exit the loop
    } else if (patokan % 2 === 0) {
        console.log(`Mengepel dilantai: ${patokan}`)
        console.log();
    }  else {
        console.log(`Menyapu dilantai: ${patokan}`)
    }
    patokan++;
} while (loopCtrl); */

// membuat object
/* const objPerson = {
    name: "ramadhika",
    age: 23,
    family: {
        ayah: "naruto",
        ibu: "kushina",
        adik: ["himawari", "buruto"]
    }
}

console.log(objPerson.family.adik[0]) */

// object Buku
/* const book = {
    title: "Binar Book",
    tags: ["relegion", "psikologi", "nonfiksi"],
    price: 70000
}
console.log(book)
book.title = "Dhika"
console.log(book)

// Constructor function(class object) -> Bisa disebut classnya JS
function BookName(title, tags, price) {
    this.title = title
    this.tags = tags
    this.price = price
}
const book2 = new BookName(
    "Sejarah Peradaban Romawi XXI", 
    ["Sejarah", "Nonfiksi", "petualangan"], 
    50000
    )
// print
console.log(book2)


//Object Constructor
const book1 = new Object()
book1.title = "Sejarah indonesia merdeka"
book1.tags = ["relegion", "sejarah", "nonfiksi"]
book1.price = 180000
// print
console.log(book1)
console.log("========================================================")


// ambil key->value
const buku1 = book2.price
console.log(`menggunakan dot notation: ${buku1}`)
const buku2 = book2.tags[0]
console.log(`menggunakan bracket notation: ${buku2}`)
const { title } = book2
console.log(`menggunakan desctructor: ${title}`)
console.log("========================================================")

// for in -> loop
console.log("menggunakan for in")
for (const key in book2){
    console.log(key)
    console.log(book2[key])
}
console.log("========================================================")

// for of Object entry
console.log("menggunakan for of")
for (const [key, value] of Object.entries(book2)) {
    console.log(key, value)
}
console.log("========================================================")

// for each
console.log("menggunakan for each")
Object.keys(book2).forEach((key) => {
    console.log(key, book2[key])
}) */






/* class Dino {
    constructor(name) {
      this.name = name;
    }
     
    weight = 100;
    sayHi() {
      console.log(`Hi my name is ${this.name}`);
    }
  }

console.log(typeof(book))
console.log(typeof(Dino)) */
console.log("===================================================")
console.log("===================================================")

// asyc
console.log("setInterval mulai")
const myInterval = setInterval(myTimer, 1000)
let i = 1
function myTimer() {
  console.log(i)
  i++
}

/* setTimeout(() => {
    console.log("setInterval berhenti")
    clearInterval(myInterval)
},6000) */

//Promis
function fetchDataFromApi(apiUrl) {
  return new Promise((resolve, reject) => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

const apiUrl = "https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/v1/random";

fetchDataFromApi(apiUrl)
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });

/*   const promiseFetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          message: "Fetch Success",
          data: {
            nama: "Ramadhika",
            hobi: ["mancing","maraton","bola"]
          }
        });
      }, 4000);
    });
  };
  
  promiseFetchData()
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    }); */