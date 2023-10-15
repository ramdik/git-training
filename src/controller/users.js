const getAllUsers = (req, res) => {
    res.send("hello GET method")
}

const postAllUsers = (req, res) => {
    res.send("hello POST method")
}

module.exports = {
    getAllUsers,
    postAllUsers
}