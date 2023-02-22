import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const realiza_SPTG = sequelize.define("realiza_sptg", {
    id_sptg:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    id_estudiante: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    }
},
{
    timestamps: false
});