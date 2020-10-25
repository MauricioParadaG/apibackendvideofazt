import {Router} from 'express';
const router = Router();

import * as videoController from './video.controller';

router.get('/videos', 
    videoController.getVideos
);

router.get('/videos/:id', 
    videoController.getVideo
);

router.post('/videos', 
    videoController.createVideo
);

router.delete('/videos/:id', 
    videoController.deleteVideo
);

router.put('/videos/:id', 
    videoController.updateVideo
);



/* const taskController = require('../controllers/tasks.controller');
const auth = require('../middleware/auth.middleware');
const { check } = require('express-validator');

// Create task in a project 
// api/tasks
router.post('/', 
    auth,
    [
        check('name', 'The task name is required').not().isEmpty(),
        check('project', 'The task needs to be created in a project').not().isEmpty()
    ],
    taskController.createTask
);

// Get all the tasks of a project
router.get('/',
    auth,
    taskController.getTasks
);

// Update task
router.put('/:id', 
    auth,
    taskController.updateTask
);

// Delete task
router.delete('/:id', 
    auth,
    taskController.deleteTask
);
 */

export default router;