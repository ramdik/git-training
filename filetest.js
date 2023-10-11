function testFunc(p,l) {
    let luasPersegi = p * l
    let msg = `luas persegi ini adalah: ${luasPersegi} m2`
    return msg
}

console.log(testFunc(2,3))