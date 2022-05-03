import app from "./app.js";
import { sequelize } from "./src/db/dbconnection.js";
import { User } from "./src/models/User.js";
import { Project } from "./src/models/Project.js";
import { Task } from "./src/models/Task.js";

const APP_PORT = 5000 || process.env.port;

const syncTables = async () => {
    await User.sync()
    await Task.sync();
    await Project.sync()
}

app.get('/sync-tables', async (req, res) => {
    try {
        await syncTables();
        res.json({message: 'Tables sync'})
    } catch(error){
        res.json({error: error.toString()})
    }
})

async function main(){
    try{
        // await syncTables();
        app.listen(APP_PORT);
        sequelize.authenticate();
        console.log('Server on http://localhost:' + APP_PORT)

    }catch(e){
        console.log(e)
    }
}

main();