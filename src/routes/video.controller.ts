import {RequestHandler} from 'express';
import Video from './Video';

export const createVideo:RequestHandler = async (req,res) => {
    const videoFound = await Video.findOne({url : req.body.url});
    if(videoFound) {
        return res.status(301).json({msg: 'This video URL was already created'});
    }

    const video =  new Video(req.body);
    const savedVideo = await video.save();
    res.json({ savedVideo });
};

export const getVideos:RequestHandler = async (req,res) => {
    try {
        const videos = await Video.find().sort({created: -1});
        return res.json({ videos });
    } catch (error) {
        console.log(error);
        res.json(error);
        //res.status(500).send('There was an error while getting the posted videos');
    }
};

export const getVideo:RequestHandler = async (req,res) => {
    const videoFound = await Video.findById(req.params.id);
    if (!videoFound) return res.status(204).json({msg: 'Not video founded'});
    res.json(videoFound);
};

export const deleteVideo:RequestHandler = async (req,res) => {
    const videoDeleted = await Video.findByIdAndDelete(req.params.id);
    if (!videoDeleted) return res.status(204).json({msg: 'Not video was deleted'});
    res.json(videoDeleted);
};

export const updateVideo:RequestHandler = async (req,res) => {
    const videoUpdate = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if (!videoUpdate) return res.status(204).json();
    res.json(videoUpdate);
};

/* const Task = require('../models/Task');
const Project = require('../models/Project');
const { validationResult } = require('express-validator');

// Create a new task
exports.createTask = async (req, res) => {

    // are there errors in tasks.route.js validation?
    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json({errors: errors.array() })
    }
    

    try {
        
        // Checking that the project really exist
        const { project } = req.body;

        const isthereaProject = await Project.findById(project);
        if(!isthereaProject) {
            return res.status(404).json({msg: 'Project not found'});
        }

        // Checking if the actual project has the auth owner
        if(isthereaProject.owner.toString() !== req.newUser.id ) {
            return res.status(401).json({msg: 'Not Permission'});
        }

        // Creating the new Task
        const task = new Task(req.body);
        await task.save();
        res.json({ task });
    
    } catch (error) {
        console.log(error);
        res.status(500).send('There was a server error while creating a new Task');
    }

}

// Getting the task by project
exports.getTasks = async (req, res) => {

        try {
            // Extracting the project and checking if it exist
            const { project } = req.query;

            const isthereaProject = await Project.findById(project);
            if(!isthereaProject) {
                return res.status(404).json({msg: 'Project not found'});
            }

            // Checking if the actual project has the auth owner
            if(isthereaProject.owner.toString() !== req.newUser.id ) {
                return res.status(401).json({msg: 'Not Permission'});
            }

            // Getting the task by project
            const tasks = await Task.find({ project }).sort({ created: -1 });
            res.json({ tasks });

        } catch (error) {
            console.log(error);
            res.status(500).send('There was an error while getting the project tasks');
        }
}

// Update a task
exports.updateTask = async (req, res ) => {
    try {
        // Extracting the project and checking if it exist
        const { project, name, state } = req.body;

        // Does the task exist?
        let task = await Task.findById(req.params.id);

        if(!task) {
            return res.status(404).json({msg: 'This task does not exist'});
        }

        // Extracting the project as I already know that it exist, because there is a task. 
        const isthereaProject = await Project.findById(project);

        // Checking if the actual project has the auth owner
        if(isthereaProject.owner.toString() !== req.newUser.id ) {
            return res.status(401).json({msg: 'Not Permission'});
        }

        // Creating an object with the new Task information
        const newTask = {};
        newTask.name = name;
        newTask.state = state;

        // Saving the task
        task = await Task.findOneAndUpdate({_id : req.params.id }, newTask, { new: true } );

        res.json({ task });

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error while updating the task');
    }
}


// Deleting a task
exports.deleteTask = async (req, res) => {
    try {
        // Extracting the project and checking if it exist
        const { project } = req.query;

        // Does the task exist or not?
        let task = await Task.findById(req.params.id);

        if(!task) {
            return res.status(404).json({msg: 'This task does not exist'});
        }

        // Extracting the project
        const isthereaProject = await Project.findById(project);

        // Checking if the actual project has the auth owner
        if(isthereaProject.owner.toString() !== req.newUser.id ) {
            return res.status(401).json({msg: 'Not Permission'});
        }

        // Delete
        await Task.findOneAndRemove({_id: req.params.id});
        res.json({msg: 'Task deleted'})

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error in the server while deleting this task')
    }
} */