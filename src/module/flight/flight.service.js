import { Op } from "sequelize";
import Flight from "./flight.model.js"

export class FlightService{

    async findOne(id, status){
    
        //1 crearme un objeto con las condiciones de mi consulta
        let whereClause = {
          id: id,
          status: status
        }
        
        if(!status){
          //pending, inProgress, done
          whereClause.status = {
            [Op.in]: ['pending', 'inProgress', 'done']
          }
        }
    
        return await Flight.findOne({
          where: whereClause
        })
    
      }
    
      async findAll() {
        return await Flight.findAll({
          where: {
            status: {
              [Op.notIn]: ['done', 'cancelled']
            },
          },
        });
      }
    
      // async findAllWithAllData(){
      //   return await Flight.findAll({
      //     where: {
      //       status: {
      //         [Op.notIn]: ['done', 'cancelled']
      //       },
      //     },
      //     include: [
      //       {
      //         model: City,
      //         as: 'destination',
      //         attributes: ['name', 'country'],
      //       },
      //       {
      //         model: City,
      //         as: 'origin',
      //         attributes: ['name', 'country']
      //       },
      //       {
      //         model: Plane,
      //         attributes: ['plane_number']
      //       }
      //     ]
      //   });
      
      // }
    
      async create(flightData) {
        return await Flight.create(flightData);
      }
    
      async update(flight, flightData) {
        return await flight.update(flightData);
      }
    
      async delete(flight) {
        return await flight.update({
          status: 'cancelled',
        });
      }
}