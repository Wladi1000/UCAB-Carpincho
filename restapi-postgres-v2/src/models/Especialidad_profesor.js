import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Especialidad_profesor = sequelize.define("especialidad_profesor", {
    id_profesor: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_especialidad: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    }
},
{
    timestamps: false
});