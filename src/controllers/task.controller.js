import { Task } from "../models/Task.js";

export async function getTasks(req, res){
    try {
        const tasks = await Task.findAll();
        return res.json(tasks)
    } catch (error) {
        res.status(500).json({error: error.toString()})
    }
}

export async function getTask(req, res){
    try {
        const id = req.params.taskId;
        const task = await Task.findOne({
            where:{
                id
            } 
        });
        return res.json(task);
    } catch (error) {
        res.status(500).json({error: error.toString()});
    }
}

export async function addTask(req, res){
    try {
        const { name, description, taskTimeEnd, project_id } = req.body
        const newTask = await Task.create({
            name, 
            description, 
            project_id, 
            taskTimeEnd
        })  
        return res.json(newTask)
    } catch (error) {
        res.status(500).json({error: error.toString()});
    }
}

export async function updateTask(req, res){
    try {
        const id = req.params.taskId;
        const { name, description, taskTimeEnd, done } = req.body
        
        let taskData = { name, description, taskTimeEnd, done }
        if(!name || !description || !taskTimeEnd) taskData = { done }

        const updatedTask = await Task.update(taskData, { 
            where: { 
                id 
            } 
        });
        return res.json(updatedTask);
    } catch (error) {
        res.status(500).json({error: error.toString()});
    }
}

export async function deleteTask(req, res){
    try {
        const id = req.params.taskId;
        const deletedTask = await Task.destroy({ 
            where: { 
                id 
            } 
        });
        return res.json(deletedTask);
    } catch (error) {
        res.status(500).json({error: error.toString()});
    }
}