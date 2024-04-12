const express = require("express");

const dotenv = require("dotenv").config();

const userRouter = require('./routes/userRouter')

const app = express();

app.set("port", process.env.PORT || 3002);

const cors = require('cors');
app.use(express.json());
app.use(cors());

app.use('/api', userRouter);

module.exports = app;