import { Project } from './../models/Project.js';
import { Task } from '../models/Task.js';

export async function getProjects(req, res) {
    try {
        const projects = await Project.findAll();
        return res.json(projects)
    } catch (error) {
        res.status(500).json({ error: error.toString() })
    }
}

export async function getProject(req, res) {
    try {
        const id = req.params.projectId;
        const project = await Project.findOne({
            where: {
                id
            }
        });
        return res.json(project);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
}

export async function addProject(req, res) {
    try {
        const { name, description, user_id } = req.body
        const projectData = { user_id, name }
        // VALIDATIONS
        if(!user_id || !name) return res.json({message: 'user_id is required'});
        if(description) projectData.description = description;

        const newProject = await Project.create(projectData);
        return res.json(newProject);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
}

export async function updateProject(req, res) {
    try {
        const id = req.params.projectId;
        const { name, description } = req.body
        const updatedProject = await Project.update({ name, description, }, {
            where: {
                id
            }
        });
        return res.json(updatedProject);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
}

export async function deleteProject(req, res) {
    try {
        const id = req.params.projectId;
        const deletedProject = await Project.findOne({
            where: {
                id
            }
        });
        await deletedProject.destroy();
        return res.json(deletedProject);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: error.toString() });
    }
}

// RELATIONS
export async function getProjectTasks(req, res) {
    try {
        const { projectId } = req.params;
        const projectTasks = await Task.findAll({ where: { project_id: projectId }, order: ['done'] });
        res.json(projectTasks)
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.toString() });
    }
}   