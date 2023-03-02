const express = require('express');
const { connection } = require('./Configs/Config');
const app = express();
require('dotenv').config();
const cors = require('cors');
const { userRoute } = require('./Routes/home.route');
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.text());

app.get('/', async (req, res) => {
    res.status(200).send({ msg: "Welcome in Mock-13" });
});

app.use('/', userRoute);

app.listen(PORT, async () => {
    try {
        await connection
        console.log(`Connected to DB`);
    } catch (err) {
        console.log(err);
        console.log(`Trouble connecting to DB`);
    }
    console.log(`Server is running at ${PORT} port`);
});