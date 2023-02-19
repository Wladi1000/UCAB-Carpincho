import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Criterios_TDGI_TE = sequelize.define('criterios_tdgi_tes',{
    id_Criterios_TDGI_TE: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});