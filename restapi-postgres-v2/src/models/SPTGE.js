import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const SPTGE = sequelize.define('solicitudteg', {
    id_steg: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
},
{
    timestamps: false
});


