const { Router } = require('express');
const { UserModel } = require('../Models/user.model');
const userRoute = Router();

userRoute.post('/users', async (req, res) => {
    const payload = req.body;
    try {
        const user = new UserModel(payload);
        await user.save();
        res.status(200).send({ msg: 'User saved successfully' });
    } catch (err) {
        console.log(err);
        res.status(404).send({ Error: err.message });
    }
});

userRoute.get('/get', async (req, res) => {
    const { page = 1, limit = 4 } = req.query;
    try {
        if (page) {
            if (Number(page) === 1) {
                let users = await UserModel.find().skip(0).limit(+limit);
                res.send(users);
            } else {
                let s = Number(page) * Number(limit) - Number(limit);
                let users = await UserModel.find().skip(s).limit(+limit);
                res.send(users);
            }
        } else {
            let users = await UserModel.find();
            res.send(users);
        }
    } catch (err) {
        console.log(err);
        res.status(404).send({ Error: err.message });
    }
});

module.exports = { userRoute };