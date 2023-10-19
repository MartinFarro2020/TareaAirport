import { catchAsync,AppError} from "../../errors/index.js"
import { PlaneService } from "./plane.service.js";

const planeService = new PlaneService();

export const validExistPlan = catchAsync(async(req,res,next)=>{
    
    const { id } = req.params;

    const plane = await planeService.findOne(id)
    
    if(!plane){
        return next(new AppError(`flight with id: ${id} not found!`, 404))
    }

    req.plane=plane;
    next()

})