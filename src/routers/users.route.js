import { getUser, getUsers, addUser, deleteUser, updateUser, getUserProjects } from "../controllers/user.controller.js";
import { Router } from "express";

const router = Router();
const ENDPOINT = '/users';

router.get(ENDPOINT, getUsers);
router.post(ENDPOINT, addUser);
router.post(`${ENDPOINT}/login`, getUser);
router.delete(`${ENDPOINT}/:userId`, deleteUser)
router.put(`${ENDPOINT}/:userId`, updateUser)

// RELATIONS
router.get(`${ENDPOINT}/:userId/projects`, getUserProjects);

export const usersRouter = router