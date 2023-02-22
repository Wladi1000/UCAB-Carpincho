import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

import { realiza_SPTG } from "./realiza_SPTG.js";

export const Estudiantes = sequelize.define('estudiantes', {
    id_estudiante: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
},
{
    timestamps: false
});

Estudiantes.hasOne(realiza_SPTG, {
    foreignKey: 'id_estudiante',
    sourceKey: 'id_estudiante'
});

realiza_SPTG.belongsTo(Estudiantes, {
    foreignKey: 'id_estudiante',
    targetId: 'id_estudiante'
});