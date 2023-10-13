import { Router } from "express";

export const router = Router();

import{
    findAllFlight,
    createFlight,
    findOneFlight,
    updateFlight,
    deleteFlight,
} from './flight.controler.js'


router.route('/')
    .get(findAllFlight)
    .post(createFlight)

router.route('/:id')
    .get(findOneFlight)
    .patch(updateFlight)
    .delete(deleteFlight)
