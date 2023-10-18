function testFunc(p,l) {
    let luasPersegi = p * l
    let msg = `luas persegi ini adalah: ${luasPersegi} m2`
    return msg
}

console.log(testFunc(2,3))

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
let arr = [1,2,3,4,54,56,6]
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element)
}