import { DataTypes } from "sequelize";
import sequelize from "../../config/database/database.js"

const Plane = sequelize.define('plane',{
    id:{
        primaryKey:true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,    
    },
    planeNumber:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field:'plane_numer',
    },
    model:{
        type:DataTypes.STRING(20),
        allowNull:false,
    },
    maxCapacity:{
        type:DataTypes.INTEGER,
        allowNull:false,
    },
    airline:{
        type:DataTypes.ENUM(
            'Iberia',
            'starPeru',
            'Latam',
            'AmericaAirlines',
            'Avianca'
        ),
    allowNull:false,
    },
    status:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true,
    },
});

export default Plane;