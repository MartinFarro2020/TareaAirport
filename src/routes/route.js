import { Router } from 'express';
import { router as planeRouter } from "../module/plane/plane.route.js";
import { router as flightRouter } from "../module/flight/flight.route.js";

export const router = Router();

router.use('/plane', planeRouter)
router.use('/flight', flightRouter)
