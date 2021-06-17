const Task = require('../../models/task');

const getTask = async(req)=>{
    try{
        const task = await Task.find(req.query).populate('owner');
    }catch(err){
        throw Error(err)
    }
};

const getTaskById = (req)=>{
    try{
        return Task.findById(req.params.id, req.body)
    }catch(err){
        throw Error(err)
    }
};

const saveTask = (req)=>{
    try{
        var task = new Task(req.body)
        return task.save()
    }catch(err){
        throw new Error(err)
    }
};

const updateTask = (req)=>{
    try{
        return Task.findByIdAndUpdate(req.params.id, req.body);
    }catch(err){
        throw new Error(err)
    }
};

const deleteTask = (req)=>{
    try{
        return Task.findByIdAndDelete(req.params.id);
    }catch(err){
        throw new Error(err)
    }
};

module.exports= {
    getTask : getTask,
    getTaskById: getTaskById,
    saveTask : saveTask,
    updateTask : updateTask,
    deleteTask : deleteTask
}