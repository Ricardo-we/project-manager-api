import app from "./app.js";
import { sequelize } from "./src/db/dbconnection.js";
import { User } from "./src/models/User.js";
import { Project } from "./src/models/Project.js";
import { Task } from "./src/models/Task.js";

const APP_PORT = 5000 || process.env.port;

const syncTables = async () => {
    await User.sync({ alter: true })
    await Task.sync({ alter: true });
    await Project.sync({ alter: true })
}

async function main(){
    try{
        // await syncTables();
        app.listen(APP_PORT);
        console.log('Server on http://localhost:' + APP_PORT)

    }catch(e){
        console.log(e)
    }
}

main();