module.exports = (req,res,next) => {
    if(req.headers["password"] !== process.env.MIDDLEWARE_PASSWORD_PRODUCTS){
        res.json("incorrect password")
        return
    }
    next()
}