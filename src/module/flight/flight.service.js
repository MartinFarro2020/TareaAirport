import { Op } from "sequelize";
import Flight from "./flight.model.js"

export class FlightService{

    async findOne(id){
        return await Flight.findOne({
            where:{
                id,   
                status:'pending'
            },
        });

    }

    async findAll(){
       return await Flight.findAll({
        where:{
            status:{
                [Op.notIn]:['pending','cancelled','inprogres','done']
            },
        },
       });
    }

    async create(flightData){
        return await Flight.create(flightData)
    }

    async update(flight, flightData){
        return await flight.update(flightData)
    }

    async delete(flight){
        return await flight.update({
            status: 'cancelled',
        });

    }
}