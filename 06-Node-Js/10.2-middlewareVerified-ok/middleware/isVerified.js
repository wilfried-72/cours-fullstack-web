// Middleware Authentification
const User = require('../db/User')

module.exports = (req, res, next) => {
    // Connecte l'utilisateur dans la base de donné
    User.findById(req.session.userId, (error, user) => {
        if (user && user.isVerified == true && !error) {
            next()
        } 
        else{
            console.log(error);
            return res.redirect('/create')
            }
    })
}