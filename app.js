const express=require('express')
const cors=require('cors')
require('dotenv').config()
const mongoose=require('mongoose')
const router=require('./src/routes/TodoRoutes')
const app=express()
const bodyParser=require('body-parser')


const connection=mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log('connected succesfully')
})
.catch((err)=>{
    console.log(err)
})

// const connection1=async()=>{
//     try{
//     await mongoose.connect(process.env.MONGO_URL)
//     console.log("connected succesfully")
//     }catch(err){
//         console.log(err)
//     }
// }

app.use(bodyParser.json())
app.use('/',router)
app.listen(process.env.PORT,()=>{
    // connection1()
    console.log("listening on",process.env.PORT)
})
