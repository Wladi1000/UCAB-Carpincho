import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Contiene_Criterios_TDGI_TE = sequelize.define("contiene_criterios_tdgi_te", {
    id_pe_te_tdgi: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_criterios_tdgi_te: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
},
{
    timestamps: false
});