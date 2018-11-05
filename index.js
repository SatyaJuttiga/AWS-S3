const express=require('express');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const mongoose = require('mongoose');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
const app=express();

app.use(express.static(__dirname + '/public'));

const port=3000;

app.listen(port,() => console.log(`server started on port ${port}`));