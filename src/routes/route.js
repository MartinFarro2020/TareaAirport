import { Router } from 'express';
import { router as planeRouter } from "../module/plane/plane.route.js"


export const router = Router();

router.use('/plane', planeRouter)

