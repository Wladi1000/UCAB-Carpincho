import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Contiene_Criterios_TDGI_TA = sequelize.define("contiene_criterios_tdgi_ta", {
    id_pe_ta_tdgi:{
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_criterios_tdgi_ta: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
},
{
    timestamps: false
});