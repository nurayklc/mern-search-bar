const mongoose = require('mongoose')

exports.connetDB = async(req,res)=>{
    try {
        const databaseName = "searchTaskDb"
        await mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`)
        console.log(`Database connected`)
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}