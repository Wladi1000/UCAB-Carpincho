import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Conforma_Consejo = sequelize.define("conforma_consejo", {
    id_cde: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_profesor: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
},
{
    timestamps: false
});