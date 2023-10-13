import { PlaneService } from "./plane.service.js";

const planeService = new PlaneService();

export const validExistPlan = async(req,res,next)=>{
    try{
        const { id } = req.params;

        const plane = await planeService.findOne(id)
        if(!plane){
            return res.status(404).json({
                status:'error',
                message:'user not found'
            })

        }

        req.plane=plane;
        next()
    }catch(error){
        return res.status(500).json(error)
    }
}