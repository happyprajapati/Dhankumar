require('./connect');
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const cors = require('cors');
const auth = require('./../routes/auth');
const user = require('./../routes/userRoutes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(auth);
app.use(user);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`app listening on port ${port}!`);
});