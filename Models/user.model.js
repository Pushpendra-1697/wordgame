const mongoose = require('mongoose');

const useSchema = mongoose.Schema({
    name: String,
    level: String
}, {
    versionKey: false
});

const UserModel = mongoose.model('gameuser', useSchema);
module.exports = { UserModel };