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
do {
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
} while (loopCtrl);