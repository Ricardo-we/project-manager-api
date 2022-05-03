import { Router } from "express";
import { getProject, getProjects, addProject, updateProject, deleteProject, getProjectTasks } from "../controllers/project.controller.js";

const ENDPOINT = '/projects';
const router = Router();

router.get(ENDPOINT, getProjects);
router.post(ENDPOINT, addProject);
router.get(`${ENDPOINT}/:projectId`, getProject);
router.delete(`${ENDPOINT}/:projectId`, deleteProject)
router.put(`${ENDPOINT}/:projectId`, updateProject)

// RELATIONS
router.get(`${ENDPOINT}/:projectId/tasks`, getProjectTasks);

export const projectsRouter = router;