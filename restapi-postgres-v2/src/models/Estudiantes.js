import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Estudiantes = sequelize.define('estudiantes', {
    id_estudiante: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
});