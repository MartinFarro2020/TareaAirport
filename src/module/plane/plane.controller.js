import { PlaneService } from "./plane.service.js";

const planeService = new PlaneService()

export const findAllPlane = async(req,res,next)=>{
    try {

        const plane = await planeService.findAll()
        return res.status(200).json(plane)

    } catch (error) {
        return res.status(500).json(error)
    }
}
export const createPlan = async(req,res,next)=>{
    try {
        const plane = await planeService.create(req.body)
        return res.status(201).json(plane)

    } catch (error) {
        return res.status(500).json(error)
    }
}
export const findOnePlane = async(req,res,next)=>{
    try {

        const {plane} = req;       
        return res.status(200).json(plane);
        
    } catch (error) {
        return res.status(500).json(error)
    }
}
export const updatePlane = async(req,res,next)=>{
    try {

            const {maxCapacity} = req.body;
            const {plane}= req;
            
            await planeService.update(plane,{maxCapacity});
            return res.status(200).json({
                message:'plane has been updated'
            })

        
    } catch (error) {
        return res.status(500).json(error)
    }
}
export const deletePlane = async(req,res,next)=>{
    try {

        const {plane} = req;
        await planeService.delete(plane)
        return res.status(204).json(null)

    } catch (error) {
        return res.status(500).json(error)
    }
}