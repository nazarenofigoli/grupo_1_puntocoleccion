const validateUser = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect("/users/login");
        return;
    }
};

module.exports=validateUser;