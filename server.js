//Modules
const express = require ( 'express' );
const app = express();
const mongoose = require ('mongoose');
const apiRoutes = require ('./routes/apiRoutes');
const HTMLRoutes = require ('./routes/HTMLroutes');

//Variables
const PORT = process.env.PORT || 3030; 
const mondoURL = process.env.MONGODB_URI || "mongodb://localhost/workout";


//Main

app.use (express.static ('public'));

app.use ('/api', apiRoutes);

app.use ('/', HTMLRoutes);

app.listen ( PORT, () => {
    console.log ( "started server at http://localhost:" + PORT );
} )
