import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Contiene_PE_TE_TDGI = sequelize.define("contiene_pe_te_tdgi", {
    id_pe_j_tdgi: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    id_pe_te_tdgi: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nota_te: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
},
{
    timestamps: false
});