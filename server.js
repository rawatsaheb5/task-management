

const express = require('express');
const morgan = require('morgan');
const colors = require('colors');
const cors = require('cors');
const dotenv = require('dotenv');
const { connectDB } = require('./db/connection')
const taskRouter = require('./route/task')
const app = express();
const taskModel = require('./model/task')
const path = require('path')
// configure env 
dotenv.config();        // if dotenv is in any folder then use like ({path:'-'})

// database config
connectDB();



// middlewares
app.use(cors())
app.use(express.json());
app.use(morgan('dev'))      

 

// app.delete("/api/task/:id", async(req, res) => {
//     try {
//         console.log(req.params);
//         // const id = req.params.id;
//         // const deletedTask = await taskModel.findByIdAndDelete(id);

//         // if (!deletedTask) {
//         //     return res.status(404).json({ message: 'Task not found' });
//         // }

//         res.json({ message: 'Task deleted successfully' });
//     } catch (error) {
//         return res.status(500).send({
//             success: false,
//             message: 'internal server error',
//             error,
//         });
//     }
// });
app.use('/api', taskRouter);

app.use(express.static(path.join(__dirname, './client/build')))
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})
    


console.log(__dirname);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white)
});




