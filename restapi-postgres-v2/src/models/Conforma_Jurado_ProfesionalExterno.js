import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Conforma_Jurado_ProfesionalExterno = sequelize.define('conforma_jurado_profesionalexterno', {
    id_jurado: {
        type: DataTypes.TEXT,
        primaryKey: true
    },
    id_profesionale:{
        type: DataTypes.INTEGER,
        primaryKey: true
    }
},
{
    timestamps: false 
});