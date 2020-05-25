const express = require("express");
const mongoose = require("mongoose");
const morgan = require('morgan');
const path = require ('path');
const apiRoutes = require(path.join(__dirname, "./routes/apiRoutes"));
const htmlRoutes = require(path.join(__dirname, "./routes/htmlRoutes.js"));

const PORT = process.env.PORT || 1738;

const app = express();

app.use(morgan("dev"));

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());



const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
})

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});