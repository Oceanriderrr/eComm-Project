const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 5000,
        dbURL: 'mongodb://127.0.0.1:27017/CryptoExc',
        authCookieName: 'x-auth-token'
    },
    production: {}
};

module.exports = config[env];