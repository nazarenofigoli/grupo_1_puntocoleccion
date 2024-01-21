
const validateAdmin = (req, res, next) => {
        if (req.session.user && req.session.user.rol === "admin") {
            next(); 
        } else {
            res.send("Acceso no autorizado"); 
            return;
        }
    };


module.exports = validateAdmin;