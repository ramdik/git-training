const logRequest = (req, res, next) => {
    console.log('ini request ke PATH', req.path)
    next()
}

module.exports = logRequest