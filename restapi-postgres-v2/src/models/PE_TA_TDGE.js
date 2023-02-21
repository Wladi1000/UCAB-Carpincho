import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const PE_TA_TDGE = sequelize.define('pe_ta_tdge',{
    id_pe_ta_tdge: {
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
        allowNull: true
    }
},
{
    timestamps: false
});