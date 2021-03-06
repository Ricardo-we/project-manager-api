import { User } from './../models/User.js';
import { Project } from '../models/Project.js';

export async function getUsers(req, res){
    try {
        const users = await User.findAll({ attributes: ['id','username'] })
        res.json(users);
    }catch(error){
        res.status(500).json({error: error.toString()})
    }
}

// LOGIN
export async function getUser(req, res){
    try{

        const { username, password } = req.body;
        const user = await User.findOne({ 
            where: {
                username, 
                password   
            } 
        })
        res.json(user);
    }catch(error){
        res.status(500).json({error: error.toString()})
    }
}

export async function addUser(req, res){
    try{
        const { username, password } = req.body;
        
        if(!username || !password) throw new Error('Not username or password');

        const newUser = await User.create({
            username,
            password
        });

        res.json(newUser);
    }catch(error){
        res.status(500).json({error: error.toString()})
    }
}

export async function deleteUser(req, res){
    try {
        const { userId } = req.params;
        const deletedUser = await User.destroy({
            where: {
                id: userId              
            }
        })
        res.json({message: 'Deleted', deletedUser})
    }catch(error){
        res.status(500).json({error: error.toString()})
    }
}

export async function updateUser(req, res){
    try {
        const { username, password } = req.body;
        const id = req.params.userId;
        const userData = {};
        
        if(!id) return res.json({message: 'User id required'});
        if(username) userData.username = username;
        if(password) userData.password = password;

        const updatedUser = await User.update(userData,{ 
            where: { 
                id 
            } 
        })
        res.json(updatedUser);
    }catch(error){
        res.status(500).json({error: error.toString()})
    }
}

// RELATIONS
export async function getUserProjects(req, res){
    try{

        const { userId } = req.params;
        const userProjects = await Project.findAll({ 
            where: {
                user_id: userId
            }  
        })
        res.json(userProjects);
    } catch(error){
        res.status(500).json({error: error.toString()})
    }
}