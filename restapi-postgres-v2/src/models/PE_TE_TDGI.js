import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';

export const PE_TE_TDGI = sequelize.define('pe_te_tdgis',{
    id_PE_TE_TDGI: {
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
});