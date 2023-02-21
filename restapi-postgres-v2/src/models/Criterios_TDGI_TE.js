import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Criterios_TDGI_TE = sequelize.define('criterios_tdgi_te',{
    id_criterios_tdgi_te: {
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