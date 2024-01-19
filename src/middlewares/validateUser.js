const validateUser = (req,res,next)=>{
    if(req.session.user){
        next()
    }
    res.redirect("/users/login");
}

module.exports = validateUser;