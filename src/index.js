const express = require("express")
const userRoute = require("./routes/users.js")
const middlewareLogReq = require("./middleware/logs.js")
const app = express()
const port = 3000

app.use(middlewareLogReq) //middleware custom
app.use(express.json()) // midleware bawaan express untuk json body

app.use("/users", userRoute)

app.listen(port, () => {
    console.log(` server menyala di port ${port}`)
})

/* app.set("view engine", "ejs")

// patern express
// app.method(path, handler)

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
    res.json({
        path: req.path,
        hostname: req.hostname,
        security: req.secure
})



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
}) */




