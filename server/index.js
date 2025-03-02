const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require("./routes/post")

const app = express();

const PORT = process.env.PORT || 8000;

// middleware

app.use(bodyParser.json());

//  connecting to DB

mongoose.connect('mongodb://localhost:27017/blosSite')
.then(() => console.log('Successfully connected to the database'))
.catch(err => console.log("DataBase connection failed", err));

// connecting to routes

app.use("api/posts", postRoutes);


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
