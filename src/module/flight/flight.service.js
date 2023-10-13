import { Op } from "sequelize";
import Flight from "./flight.model.js"

export class FlightService{

    async findOne(id){
        return await Flight.findOne({
            where:{
                id,   
            },
        });

    }

    async findAll(){
       return await Flight.findAll({
        where:{
            status:'pending',
        },
       });
    }

    async create(flight){
        return await Flight.create(flight)
    }

    async update(flight){
        return await flight.update(flight)
    }

    async delete(flight){
        return await flight.update({status:'cancelled'});

    }
}