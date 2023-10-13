import { Sequelize } from "sequelize";
import { envs } from "../enviroments/enviroment.js";

const sequelize = new Sequelize(envs.DB_URI,{
    logging:false,
})

export async function authenticate(){
    try {
        await sequelize.authenticate();
        console.log('db connection: ok!👌😎👏')
    } catch (error) {
        throw new Error('Error al autenticar:' + error)
    }
}

export async function synced(){
    try {
        await sequelize.sync()
        console.log('db synced:ok!😎👌😎');
    } catch (error) {
        throw new Error('Error al sincronizar:'+ error)
    }
}

export default sequelize