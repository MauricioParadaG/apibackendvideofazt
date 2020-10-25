import app from './app';
import './database';
//const express = require('express');
//const connectDB = require('./config/db');
//const cors = require('cors');


// Connect to database
//connectDB();

// Cors required for connecting back and front
//app.use(cors());

// enabling express to read json, express.json 
//app.use(express.json({extended: true}));

// Settings - Port
//const PORT = process.env.PORT || 4000;

/* Small example
// Router - Main page
app.get('/', (req, res) => {
    res.send('index Hello world');
});
*/

// Import Routes
//app.use('/api/users', require('./routes/users.routes'));
//app.use('/api/auth', require('./routes/auth.routes'));
//app.use('/api/projects', require('./routes/projects.routes'));
//app.use('/api/tasks', require('./routes/tasks.routes'));


// Starting server / app
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});

/* app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`);
});
 */