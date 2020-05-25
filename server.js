const express = require( 'express' );
const app = express ();
const port = process.env.PORT || 1738; 
const mongoose = require ( 'mongoose' );

app.get('/', (req, res) => res.send('Hello World!'));

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/mongoose_db", { useUnifiedTopology: true, useNewUrlParser: true });

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));

