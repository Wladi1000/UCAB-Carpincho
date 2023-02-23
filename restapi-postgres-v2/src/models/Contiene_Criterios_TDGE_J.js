import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Contiene_Criterios_TDGE_J = sequelize.define("contiene_criterios_tdge_j", {
    id_pe_j_tdge: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_criterios_tdge_j: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
},
{
    timestamps: false
});