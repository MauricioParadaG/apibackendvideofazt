import dotenv from 'dotenv';
dotenv.config();

//console.log(process.env.SECRET);

export default {
    MONGO_DB: process.env.MONGO_DB || 'videosdb',
    MONGO_USER: process.env.MONGO_USER || 'admin',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
    MONGO_HOST: process.env.MONGO_HOST || 'localhost',
    PORT: process.env.PORT || 4000
}

