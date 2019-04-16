const jwt = require('jsonwebtoken');
const config = require('./config');

const generateUserJwtToken = (userData) => {
    return jwt.sign(userData, config.jwtConfig.secretKey, config.jwtConfig.options);
}

const decodeUserJwtToken = (token) => {
    return jwt.verify(token, config.jwtConfig.secretKey);
}

module.exports = { generateUserJwtToken, decodeUserJwtToken };