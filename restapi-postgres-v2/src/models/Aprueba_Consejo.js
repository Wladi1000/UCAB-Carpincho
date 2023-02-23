import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Aprueba_Consejo = sequelize.define("aprueba_consejo", {
    id_cde: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_ptg: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    estatus: {
        type: DataTypes.STRING(2),
        allowNull: true
    }
},
{
    timestamps: false
});