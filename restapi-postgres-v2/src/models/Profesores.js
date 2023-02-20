import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

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



