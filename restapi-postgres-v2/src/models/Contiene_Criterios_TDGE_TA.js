import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Contiene_Criterios_TDGE_TA = sequelize.define("contiene_criterios_tdge_ta", {
    id_pe_ta_tdge: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_criterios_tdge_ta: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
},
{
    timestamps: false
});