import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const PE_TE_TDGI = sequelize.define('pe_te_tdgi',{
    id_pe_te_tdgi: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    estatus: {
        type: DataTypes.STRING(2),
        allowNull: false,
        defaultValue: 'NR'
    },
    nota_final: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null
    }
},
{
    timestamps: false
});