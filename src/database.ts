import mongoose, {ConnectionOptions} from 'mongoose';
import config from './config';

//const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/databasetest';

(async () => {
try {
    const mongooseOptions: ConnectionOptions ={
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
/*      user: config.MONGO_USER,
        pass: config.MONGO_PASSWORD */
    }
    const db = await mongoose.connect(`mongodb://${config.MONGO_HOST}/${config.MONGO_DB}`, 
        mongooseOptions
    );
    console.log('Database is connected to:', db.connection.name);
    
} catch (error) {
    console.log('There was an error');
    console.error(error);
}
})();

/*
mongoose.connect('mongodb://localhost/videomern-database',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));
*/