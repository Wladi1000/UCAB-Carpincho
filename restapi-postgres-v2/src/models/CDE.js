import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const CDE = sequelize.define("cde", {
    id_cde: {
        type: DataTypes.STRING(13),
        primaryKey: true
    },
    fecha_conformacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date(),
    }
},
{
    timestamps: false
});