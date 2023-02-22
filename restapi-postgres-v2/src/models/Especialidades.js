import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Especialidades = sequelize.define("especialidades", {
    id_especialidad: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
},
{
    timestamps: false
});