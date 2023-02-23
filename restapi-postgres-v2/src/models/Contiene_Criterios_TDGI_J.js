import { DataTypes, DATE } from "sequelize";
import { sequelize } from '../database/database.js';

export const Contiene_Criterios_TDGI_J = sequelize.define("contiene_criterios_tdgi_j", {
    id_pe_j_tdgi: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_criterios_tdgi_j: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
},{
    timestamps: false
});

