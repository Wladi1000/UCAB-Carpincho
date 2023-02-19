import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Criterios_TDGE_J = sequelize.define('criterios_tdge_js',{
    id_Criterios_TDGE_J: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});