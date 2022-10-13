require('dotenv').config();

const config = {
    port: process.env.PORT || 9000,
    nodeEnv: process.env.NODE_ENV || 'development',
    db: {
        host: process.env.DB_HOST || 'localhost',
        username: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'soloyo12',
        database: process.env.DB || 'test',
        port: process.env.DB_PORT || 5432,
    },
};
module.exports = config;