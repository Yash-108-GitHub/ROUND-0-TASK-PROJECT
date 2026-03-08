const Task = require("../models/task");

module.exports.createTask = async (req, res) => {
    try{
        const { title} = req.body;

        const newTask = new Task({
            title,
            createdBy: req.user.id
        });

        const savedTask = await newTask.save();

        res.status(201).json({
            message:" task created",
            task: savedTask
        });
    }catch(err){
        res.status(500).json({
            message: "failed"
        });
    }
};

module.exports.getAllTasks = async (req, res) =>{
    try{
        const tasks = await Task.find({createdBy: req.user.id});

        res.status(200).json({
            tasks
        });
    }catch(err){
        res.status(500).json({
            message: "failed"
        });
    }
};

module.exports.deleteTask = async (req , res)=>{
    try{
        const {id} = req.params;

        const deleteTask = await Task.findByIdAndDelete(id);

        res.status(200).json({
            message: "Task deleted successfully"
        });
    }catch(err){
       res.status(500).json({
            message: "failed"
        });
    }
};