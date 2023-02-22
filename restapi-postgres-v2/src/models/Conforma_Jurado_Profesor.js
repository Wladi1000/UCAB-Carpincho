import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Conforma_Jurado_Profesor = sequelize.define('conforma_jurado_profesor', {
    id_jurado: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_profesor: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
},
{
    timestamps: false
});