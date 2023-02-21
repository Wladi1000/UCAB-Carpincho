import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { Conforma_Jurado_Profesor } from "./Conforma_Jurado_Profesor.js";

import { SPTG } from "./SPTG.js";

export const Profesores = sequelize.define('profesores', {
    id_profesor: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
},
{
    timestamps: false
});

Profesores.hasOne(SPTG, {
    foreignKey: 'id_ta',
    sourceKey: 'id_profesor',
    allowNull: true
});

SPTG.belongsTo(Profesores, {
    foreignKey: 'id_ta',
    targetId: 'id_profesor'
});

Profesores.hasOne(Conforma_Jurado_Profesor, {
    foreignKey: 'id_profesor',
    sourceKey: 'id_profesor'
});

Conforma_Jurado_Profesor.belongsTo(Profesores, {
    foreignKey: 'id_profesor',
    targetId: 'id_profesor'
});



