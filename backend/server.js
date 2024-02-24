const express=require('express')
const cors=require('cors')

const dotenv=require("dotenv")
const connectDB=require("./config/db")
const userRoutes=require("./routes/userRoutes")
const adminRoutes=require("./routes/adminRoutes")
const noteRoutes=require('./routes/noteRoutes')

const { notFound, errorHandler } = require('./middleware/errormiddleware')
const app=express()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



dotenv.config()
connectDB()

app.use('/api/users',userRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/notes',noteRoutes)



app.use(notFound)
app.use(errorHandler)


const PORT=process.env.PORT||5000

app.listen(5000,console.log(`server started on port ${PORT}`))