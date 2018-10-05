//Still not sure what this is for, but I always gotta include it
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();



mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nopen_loop_dev_db");
console.log('Starting NOPEN-LOOP DEV branch')

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => `NOPEN-LOOP Backend Server running on PORT: ${PORT}`);

app.use(routes);
