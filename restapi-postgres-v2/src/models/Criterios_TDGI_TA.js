import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Criterios_TDGI_TA = sequelize.define('criterios_tdgi_ta',{
    id_criterios_tdgi_ta: {
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