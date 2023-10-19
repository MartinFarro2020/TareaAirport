import { catchAsync, AppError } from '../../errors/index.js'
import { validatePlane, validatePartialPlane } from "./plane.schema.js";
import { PlaneService } from "./plane.service.js";

const planeService = new PlaneService()

export const findAllPlane = catchAsync(async(req,res,next)=>{   

        const plane = await planeService.findAll()
        
        return res.status(200).json(plane)
   
});

export const createPlan = catchAsync(async(req,res,next)=>{
    
    const { hasError, errorMessages, planeData } = validatePlane(req.body);

        if (hasError) {
            return res.status(422).json({
              status: 'error',
              message: errorMessages,
            });
        }

        const plane = await planeService.create(planeData);

        return res.status(200).json(plane);               
});

export const findOnePlane = catchAsync(async (req, res, next) => {
  
    const { plane } = req;
  
    return res.status(200).json(plane);

  });


export const updatePlane = catchAsync(async (req, res, next) => {
  
  const { plane } = req;

  const { hasError, errorMessages, planeData } = validatePartialPlane(req.body);

  if (hasError) {
    return res.status(422).json({
      status: 'error',
      message: errorMessages,
    });
  }

  const updatedPlane = await planeService.update(plane, planeData);

  return res.status(200).json(updatedPlane);
});


export const deletePlane = catchAsync(async (req, res, next) => {
    const { plane } = req;
  
    await planeService.delete(plane);
  
    return res.status(204).json(null);
  });