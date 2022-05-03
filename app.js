import express from 'express'
import { usersRouter } from './src/routers/users.route.js';
import { projectsRouter } from './src/routers/project.route.js';
import { tasksRouter } from './src/routers/task.route.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(usersRouter);
app.use(projectsRouter);
app.use(tasksRouter);

app.get('/', (req, res) => {
    res.send(`
        --API URLS--
        <br>
        <br>/users
            <br>[DELETE, GET, PUT]
            <br>/userId
            <br>/userId/projects
        <br>/projects
            <br>[DELETE, GET, PUT]
            <br>/projectId
            <br>/projectId/tasks
        <br>/tasks
            <br>[DELETE, GET, PUT]
            <br>/taskId
    `)
})

export default app;