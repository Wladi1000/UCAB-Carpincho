import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Criterios_Rev_TEG = sequelize.define('criterios_rev_tigs',{
    id_Criterios_Rev_TIG: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});