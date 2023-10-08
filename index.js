const express = require("express")
const app = express()
const port = 3000

app.set("view engine", "ejs")

//logging
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next()
}
app.use(logger)

app.get("/", (req, res) => {
    res.render("index")
    
})

app.get("/greet", (req, res) => {
    const name = req.query.name || "void"
    res.render("greet", {
        name
    })
})

app.get("/products", (req, res) => {
    res.json([
        "Apple",
        "Samsung",
        "Readmi"
    ])
    //console.log("endpoint /products")
})

app.get("/orders", (req, res) => {
    res.json([
        {
            id: 1,
            paid: false,
            user_id: 1
        },
        {
            id: 2,
            paid: false,
            user_id: 2
        }
    ])
    //console.log("endpoint /orders")
})

app.listen(port, () => {
    console.log(` server menyala di port ${port}`)
})

