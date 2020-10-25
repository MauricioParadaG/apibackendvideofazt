import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config';

import videosRoutes from './routes/video.routes';


// Initializations
const app = express();


// Settings
app.set('port', config.PORT);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Routes
app.use(videosRoutes);



/*  

// Middlewares
app.use(cors());
app.use(express.json());

// Global Variables

// Routes
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/notes', require('./routes/notes.routes'));

// Static Files

*/

export default app; 