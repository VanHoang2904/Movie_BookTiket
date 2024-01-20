import mongoose from 'mongoose';
const Schema = mongoose.Schema  

const User = new Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    admin: {type: Boolean, default: false},
    orderDetail: {type: Array}
}, {timestamps: true})

module.exports = mongoose.model('User', User, 'User')