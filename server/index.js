const express = require('express')
require('dotenv').config()

const sequelize = require('./db')
const models = require('./models/models')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const router = require('./routes/index')
const app = express()
const fileUpload = require('express-fileupload')
const errorHandler = require('./middleware/ErrorHandlingMiddleWare')

app.use(cors())
app.use(express.json())
app.use(fileUpload({}))
app.use('/api', router)
app.use(errorHandler)


const start = async () =>{
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, ()=> console.log(`Server started on PORT ${PORT}`))
    } catch (e){
        console.log(e)
    }
}

start()