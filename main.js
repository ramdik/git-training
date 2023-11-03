const rumus = require ('./controlFile')
const fs = require('fs')

const textUpdate = `luas segitiga adalah: ${rumus.luasSegitiga(100,1)}mm`
fs.writeFileSync("file.txt", textUpdate)

const readFile = fs.readFileSync("./file.txt", {encoding: 'utf-8'})
console.log(readFile)