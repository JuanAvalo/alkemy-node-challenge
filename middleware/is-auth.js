const jwt = require('jsonwebtoken');
require('dotenv').config();

const jwtKey = process.env.JWT_TOKEN_KEY;
const jwtExpirySeconds = 300;

const createToken = (username) => {

    const token = jwt.sign({username}, jwtKey, {
        algorithm: "HS256",
        expiresIn: jwtExpirySeconds,
    })
    console.log(token)
    return token;

}

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if(!authHeader) res.status(401).send('Unauthorized');
    jwt.verify(authHeader, jwtKey, function(error, decoded){
        if(error) return res.status(500).send({auth: false, message: 'Failed to authenticate'})
        next();
    })
}

module.exports = {createToken, verifyToken}