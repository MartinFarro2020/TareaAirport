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
import { protect } from '../../auth/auth.middleware.js';

export const router = Router();

//router.use(protect)

router.route('/')
    .get(findAllPlane)
    .post(createPlan)

router.use('/:id',validExistPlan)

router.route('/:id')
    .get(findOnePlane)
    .patch(updatePlane)
    .delete(deletePlane)
    
