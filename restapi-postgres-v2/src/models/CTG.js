import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const CTG = sequelize.define("ctg", {
    id_ctg: {
        type: DataTypes.TEXT,
        primaryKey: true
    },
    fecha_conformacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    }
},
{
    timestamps: false
});
