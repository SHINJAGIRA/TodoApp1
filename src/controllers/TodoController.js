const Todo=require('../models/TodoModel')

const createTodo=async(req,res)=>{
    const {taskName,taskDescription,isComplete}=req.body
    try{
        const todo = await Todo.create({
            taskName,
            taskDescription,
            isComplete
        })
        await todo.save()
        return res.status(200).json({todo})

    }catch(err){
        return res.status(500).json({"internal server error":err})

    }
}


const getTodo=async(req,res)=>{
    try{
        const todos=await Todo.find()
        return res.status(200).json({"todos":todos})
    }
    catch(err){
        return res.status(500).json({"internal server error":err})
    }
}

const updateTodo=async(req,res)=>{
    const {id}=req.params
    const {taskName,taskDescription,isComplete}=req.body
    try{
        const todo=await Todo.findByIdAndUpdate(id,{
            taskName:taskName,
            taskDescription:taskDescription,
            isComplete:isComplete
        })
        await todo.save()
        return res.status(200).json({todo})
    }catch(err){
        return res.status(500).json({"internal server error":err})
    }
}


module.exports={createTodo,getTodo,updateTodo}