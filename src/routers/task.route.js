import { Router } from "express";
import { getTask, getTasks, addTask, deleteTask, updateTask } from "../controllers/task.controller.js";
const ENDPOINT = '/tasks';
const router = Router();

router.get(ENDPOINT, getTasks);
router.post(ENDPOINT, addTask);
router.get(`${ENDPOINT}/:taskId`, getTask);
router.delete(`${ENDPOINT}/:taskId`, deleteTask);
router.put(`${ENDPOINT}/:taskId`, updateTask);

// RELATIONS

export const tasksRouter = router;