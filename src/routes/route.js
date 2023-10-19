import { Router } from 'express';
import { router as planeRouter } from "../module/plane/plane.route.js";
import { router as flightRouter } from "../module/flight/flight.route.js";
import { router as authRouter } from "../auth/auth.route.js"
import { protect } from '../auth/auth.middleware.js';

export const router = Router();

router.use(protect)
router.use('/plane', planeRouter)
router.use('/flight', flightRouter)
router.use('/users', authRouter)
