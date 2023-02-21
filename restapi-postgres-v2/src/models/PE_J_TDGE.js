import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const PE_J_TDGE = sequelize.define('pe_j_tdge',{
    id_pe_j_tdge: {
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
},{
    timestamps: false
});