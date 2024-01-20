import mongoose from 'mongoose';

const connect = async () => {
        try {
            await mongoose.connect('mongodb+srv://levanhoang29042002:vanhoang123@cluster0.dqpqxqs.mongodb.net/Movie?retryWrites=true&w=majority');
            console.log("connect successfully")
        } catch (error) { 
            console.log(error)
            console.log("connect fail")
        }
}

module.exports = {connect}