import mongoose from 'mongoose';
const Schema = mongoose.Schema  

const Movie = new Schema({
    idMovie: {type: Number},
    title: {type: String},
    overView: {type: String},
    posterPath: {type: String},
    backdropPath: {type: String}

}, {timestamps: true})

module.exports = mongoose.model('Movie', Movie, 'Movies')
