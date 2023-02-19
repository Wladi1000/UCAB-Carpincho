import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Criterios_TDGI_J = sequelize.define('criterios_tdgi_js',{
    id_Criterios_TDGI_J: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});