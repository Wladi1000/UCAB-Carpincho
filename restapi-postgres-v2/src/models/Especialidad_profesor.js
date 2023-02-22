import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Especialidad_profesor = sequelize.define("especialidad_profesor", {
    descripcion: {
        type: DataTypes.TEXT
    }
});