import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const Contiene_PE_TE_TDGI = sequelize.define("contiene_pe_te_tdgi", {
    nota_TE: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
});