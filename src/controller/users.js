const getAllUsers = (req, res) => {
    res.send("hello GET method")
}


// POST
const postAllUsers = (req, res) => {
    console.log(req.body)
    res.json({
        message: "CREATE new user success",
        data: req.body
    })
    //res.send("hello POST method")
}

module.exports = {
    getAllUsers,
    postAllUsers
}