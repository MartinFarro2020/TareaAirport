import { FlightService } from "./flight.service.js"


const flightService = new FlightService(); 

export const findAllFlight = async(req,res,next)=>{
    try {
     
        const flight = await flightService.findAll()
        return res.status(200).json(flight)

    } catch (error) {
        return res.status(500).json(error)
    }
}
export const createFlight = async(req,res,next)=>{
    try {
        
        const flight = await flightService.create(req.body)
        return res.status(200).json(flight)

    } catch (error) {
        return res.status(500).json(error)
    }
}
export const findOneFlight = async(req,res,next)=>{
    try {
        
        const {flight} = req.params;       
        return res.status(200).json(flight);

    } catch (error) {
        return res.status(500).json(error)
    }
}
export const updateFlight = async(req,res,next)=>{
    try {
        
    } catch (error) {
        return res.status(500).json(error)
    }
}
export const deleteFlight = async(req,res,next)=>{
    try {
        
    } catch (error) {
        return res.status(500).json(error)
    }
}