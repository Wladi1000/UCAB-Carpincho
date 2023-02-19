import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const CDE = sequelize.define("CTGs", {
    id_CTG: {
        type: DataTypes.TEXT,
        primaryKey: true
    },
    fecha_conformacion: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
    }
});