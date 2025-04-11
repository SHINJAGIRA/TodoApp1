const mongoose=require('mongoose')

const todoSchema= new mongoose.Schema({
    taskName:{
        type:String,
        required:true
    },taskDescription:{
        type:String
    },
    isComplete:{
        type:Boolean,
        default:false
    }
},{timestamps:true})

const Todo= mongoose.model("Todo",todoSchema)
module.exports=Todo
