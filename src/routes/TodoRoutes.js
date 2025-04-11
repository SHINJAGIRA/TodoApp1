const todoController=require('../controllers/TodoController')
const Todo=require('../models/TodoModel')

const router=require('express').Router()


router.get('/',todoController.getTodo)
router.post('/create',todoController.createTodo)
router.patch('/:id',todoController.updateTodo)
router.delete('/delete/:id',async(req,res)=>{
    const id=req.params.id
    try{
        const todo=await Todo.findByIdAndDelete(id)
        return res.status(200).json({"msg":"deleted successfully"})
    }catch(err){
        console.log(err)
        return res.status(500).json({"internal server error":err})
    }
})

module.exports=router

