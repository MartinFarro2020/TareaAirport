import { DataTypes } from "sequelize";
import sequelize from "../../config/database/database.js";

const Flight = sequelize.define('flight',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        type:DataTypes.INTEGER
    },
    originId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    destinationId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    planeId:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    departureDare:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    checkIn:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    status:{
        type: DataTypes.ENUM('pending','cancelled','inprogres','done'),
        allowNull: false,
        defaultValue: 'pending',
    },

});

export default Flight;