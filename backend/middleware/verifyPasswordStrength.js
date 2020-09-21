const passwordValidator = require('password-validator');

module.exports = (req, res, next) => {
    const passwordSchema = new passwordValidator();

    passwordSchema
    .is().min(6)
    .is().max(100)
    .has().uppercase()
    .has().lowercase()
    .has().digits()
    .has().not().spaces()
    .is().not().oneOf(['password', 'passw0rd', 'password123', '123456']);

    if (!passwordSchema.validate(req.body.password)) {
        console.log('mot de passe trop simple');
        res.status(400).json({error: 'mot de passe trop simple'});
    } else {
        next();
    }
}