import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Designa_Revisor = sequelize.define("designa_revisor", {
    id_ctg: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_profesorrevisor: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_ptg: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    fecha_designacion: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
        allowNull: false
    }
},
{
    timestamps: false
});