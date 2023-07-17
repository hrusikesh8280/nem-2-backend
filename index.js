const express = require("express")
const cors = require("cors")
const { connection } = require("./connection/db")


const boardRoutes = require("./routes/board");
const taskRoutes  = require("./routes/task")
const subtaskRoutes = require("./routes/subtask")

const app = express()
app.use(express.json())
app.use(cors())


app.use("/api/boards", boardRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/subtasks", subtaskRoutes);




app.listen(7009,async()=>{
    try{
        await connection
        console.log("Server Connected to the Mongoose");
    }catch(err){
        console.log(err);
    }
    console.log("Server is Running at 7009");
})