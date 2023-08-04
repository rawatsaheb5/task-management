const taskModel = require('../model/task');

const createTaskController = async (req, res) => {
    try {
        
        const newTask = new taskModel(req.body);

        await newTask.save();
        res.status(201).send("task created");
    } catch (error) {
        //console.error('Internal server error:', error);
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message, // Send the error message only
        });
    }
};

const getAllTask = async (req, res) => {
    try {
        console.log(req.query);
        const allTask = await taskModel.find({});
        if (!allTask) {
            return res.status(400).send({
                success: false,
                message: 'something went wrong',
                error,
            });
        }
        res.status(200).send({
            success: true,
            message: "successful get",
            allTask,
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'internal server error',
            error,
        });
    }
};

const handleDeleteTask = async (req, res) => {
    try {
        console.log(req.query);
        const id = req.params.id;
        const deletedTask = await taskModel.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: 'internal server error',
            error,
        });
    }
};
// const task = async (req, res) => {
//     try {
//         const present = await taskModel.findById(req.params._id);
        
//         console.log(req.params._id);
//         if (!present) {
//             return res.status(400).send({
//                 success: false,
//                 message:"something went wrong",
//             })
//         }
//         res.status(200).send({
//             present
//         })
        
//     } catch (err) {
//         return res.status(500).send({
//             success: false,
//             message:"internal server error"
//         })
//     }
// }
const handleUpdateStatus = async (req, res) => {
    try {
        console.log(req);
        const { id } = req.params;
        const { status } = req.body;

        const updatedTask = await taskModel.findByIdAndUpdate(
            id,
            { status },
            { new: true } // To return the updated task in the response
        );

        if (!updatedTask) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.json(updatedTask);
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    createTaskController,
    getAllTask,
    handleDeleteTask,
    handleUpdateStatus,
    
};
