import { Router } from 'express';
import {
     createPlan,
     deletePlane,
     findAllPlane,
     findOnePlane,
     updatePlane
     } 
     from './plane.controller.js';
import { validExistPlan } from './plane.middleware.js';

export const router = Router();

router.route('/')
    .get(findAllPlane)
    .post(createPlan)

router.use('/:id',validExistPlan)

router.route('/:id')
    .get(findOnePlane)
    .patch(updatePlane)
    .delete(deletePlane)
    
