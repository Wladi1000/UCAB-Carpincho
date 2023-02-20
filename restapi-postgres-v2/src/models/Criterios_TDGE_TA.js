import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Criterios_TDGE_TA = sequelize.define('criterios_tdge_ta',{
    id_criterios_tdge_ta: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
{
    timestamps: false
});