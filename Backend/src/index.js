require('./connect');
require('dotenv').config();
const express = require('express');
const app = express();
const path = require("path");
const port = process.env.PORT;
const cors = require('cors');
const auth = require('./../routes/auth');
const user = require('./../routes/userRoutes');
const admin = require('./../routes/adminRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use("/public", express.static(path.join((__dirname + '/public'))));
app.use(auth);
app.use(user);
app.use(admin);

app.listen(port, () => {
    console.log(`app listening on port ${port}!`);
});