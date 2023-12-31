// this config folder contains the files related to the config

const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected To Mongodb Database ${conn.connection.host}`.bgMagenta.white);   
        
    } catch (error) {
        console.log(`Error in Mongodb ${error}`.bgRed.white);
        
    }
};

module.exports = {
    connectDB,
}



//---------------------------------

/*

1. connectDB  = used to connect database to our node
*/