import Plane from "./plane.model.js";


export class PlaneService {

    async findAll(){
        return await Plane.findAll({
            where:{
                status:'true'
            },
        });
    }
    async create(data){
        return await Plane.create(data)
    }

    async findOne(id){
        return await Plane.findOne({
            where:{
                id,
                status:'true',
            },
        });
    
    }

    async update(plane){
        return await Plane.update(plane);
    }
    
    async delete(plane){
        return await plane.update({status:'false'})
    }
}