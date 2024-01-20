import mongoose, { Types } from 'mongoose';
const Schema = mongoose.Schema  

const Cinema = new Schema({
    id: {type: String},
    name: {type: String},
    address: {type: String},
    logo: {type: String},
    type : {type: String}
}, {timestamps: true})

module.exports = mongoose.model('Cinema', Cinema, 'Cinema')
