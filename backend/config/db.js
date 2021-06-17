const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        console.log(`MongoDB connected ${conn.connection.host}`.brightGreen.inverse)
    } catch (error) {
        console.log(`ERROR: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

module.exports = connectDB