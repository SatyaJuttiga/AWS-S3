const express=require('express');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const env=require('./config/env');

const app=express();

app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

const port=3000;

mongoose.connect(env.mongodb.dbURI,() => {
    console.log('connected to mongo db');
});

app.listen(port,() => console.log(`server started on port ${port}`));